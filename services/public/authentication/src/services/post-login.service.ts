import { ConflictException, Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SecurityService } from '@corp.startup.business.stock.backend.nodejs.nestjs/security/dist/security.service'
import { Model } from 'mongoose'
import { ReqPostLoginDto } from '../dtos'
import { Hashes, HashesDocument, Users, UsersDocument } from '../schemas'
import { CryptoUtil } from '../utils'
import { RequestCreateTokenInterface } from '@corp.startup.business.stock.backend.nodejs.nestjs/security/dist/interfaces'
import { listenerConfig } from '../config/constant-listener.config'

@Injectable()
export class PostLoginService {
  private readonly logger: Logger

  constructor(
    private eventEmitter: EventEmitter2,
    @InjectModel(Hashes.name)
    private readonly hashesModule: Model<HashesDocument>,
    @InjectModel(Users.name)
    private readonly usersModule: Model<UsersDocument>,
    private readonly securityService: SecurityService,
  ) {
    this.logger = new Logger(PostLoginService.name)
  }

  async execute(reqPostLoginDto: ReqPostLoginDto) {
    const findOneHashById = await this.findOneHashById(reqPostLoginDto.id)

    this.logger.log(`${JSON.stringify(PostLoginService.name)}::execute::[reqPostLoginDto] ${JSON.stringify(reqPostLoginDto)}`)

    if (!findOneHashById) {
      throw new ConflictException('Los datos ingresados son incorrectos')
    }

    const decryptDataCredentials: any = CryptoUtil.decryptData(reqPostLoginDto.hash, findOneHashById.hashes.from, findOneHashById.keys.to)

    const parseJsonDecryptDataCredentials = JSON.parse(decryptDataCredentials)
    const decryptDataEmail = CryptoUtil.decryptData(parseJsonDecryptDataCredentials.encryptDataEmail, findOneHashById.hashes.from, findOneHashById.keys.from)
    const decryptDataPassword = CryptoUtil.decryptData(parseJsonDecryptDataCredentials.encryptDataPassword, findOneHashById.hashes.to, findOneHashById.keys.to)

    this.logger.log(`${JSON.stringify(PostLoginService.name)}::execute::[decryptDataEmail] ${JSON.stringify(decryptDataEmail)}`)
    this.logger.log(`${JSON.stringify(PostLoginService.name)}::execute::[decryptDataPassword] ${JSON.stringify(decryptDataPassword)}`)

    const findUserByEmail = await this.findUserByEmail(decryptDataEmail)

    if (findUserByEmail.password !== decryptDataPassword) {
      throw new ConflictException('Email y/o password son incorrectos')
    }

    this.eventEmitter.emit(listenerConfig.hashes.event_remove_hash, {
      idHash: reqPostLoginDto.id
    });

    return await this.securityService.createToken(<RequestCreateTokenInterface>{
      idUser: findUserByEmail._id,
      email: findUserByEmail.email,
      profile: findUserByEmail.profile.code,
      firstName: findUserByEmail.firstName,
      lastName: findUserByEmail.lastName,
      idGrocer: findUserByEmail.grocers[0],
      permissions: findUserByEmail.permissions
    })
  }

  private findOneHashById = (idHash: string) => {
    return this.hashesModule.findById(idHash, { hashes: 1, keys: 1 }).exec()
  }

  private findUserByEmail = async (decryptDataEmail: string) => {
    const user = await this.usersModule.findOne(
      { email: decryptDataEmail, "status.value": 1, recordActive: true }, 
      { _id: 1, email: 1, firstName: 1, lastName: 1, password: 1, permissions: 1, grocers: 1, profile: 1, auditProperties: 1 }
    ).exec();

    if (!user) {
      throw new ConflictException('Usuario no se encuentra registrado')
    }

    return user
  }
}
