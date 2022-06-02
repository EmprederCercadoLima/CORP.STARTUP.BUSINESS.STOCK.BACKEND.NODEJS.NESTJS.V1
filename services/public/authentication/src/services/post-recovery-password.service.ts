import { ConflictException, Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ReqPostRecoveryPasswordDto } from '../dtos'
import { Hashes, HashesDocument, Users, UsersDocument } from '../schemas'
import { CryptoUtil } from '../utils'

@Injectable()
export class PostRecoveryPasswordService {
  private readonly logger: Logger

  constructor(
    @InjectModel(Hashes.name)
    private readonly hashesModule: Model<HashesDocument>,
    @InjectModel(Users.name)
    private readonly usersModule: Model<UsersDocument>,
  ) {
    this.logger = new Logger(PostRecoveryPasswordService.name)
  }

  async execute(reqPostRecoveryPasswordDto: ReqPostRecoveryPasswordDto) {
    const findOneHashById = await this.findOneHashById(reqPostRecoveryPasswordDto.id)

    if (!findOneHashById) {
      throw new ConflictException('Los datos ingresados son incorrectos')
    }

    const decryptDataCredentials: any = CryptoUtil.decryptData(reqPostRecoveryPasswordDto.hash, findOneHashById.hashes.from, findOneHashById.keys.to)
    const parseJsonDecryptDataCredentials = JSON.parse(decryptDataCredentials)
    const decryptDataEmail = CryptoUtil.decryptData(parseJsonDecryptDataCredentials.email, findOneHashById.hashes.from, findOneHashById.keys.from)

    const findUserByEmail = await this.findUserByEmail(decryptDataEmail)

    if (!findUserByEmail) {
      throw new ConflictException('Usuario no se encuentra registrado o se encuentra eliminado')
    }

    return {
      code: '',
    }
  }

  private findOneHashById = (idHash: string) => {
    return this.hashesModule.findById(idHash, { hashes: 1, keys: 1 }).exec()
  }

  private findUserByEmail = (decryptDataEmail: string) => {
    return this.usersModule.findOne({ email: decryptDataEmail, recordActive: true }, { email: 1, password: 1, auditProperties: 1 }).exec()
  }
}
