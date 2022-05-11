import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SecurityService } from '@corp.startup.business.stock.backend.nodejs.nestjs/security/dist/security.service';
import { Model } from 'mongoose';
import { ReqPostLoginDto } from 'src/dtos';
import { Hashes, HashesDocument, Users, UsersDocument } from 'src/schemas';
import { CryptoUtil } from 'src/utils';
import { RequestCreateTokenInterface } from '@corp.startup.business.stock.backend.nodejs.nestjs/security/dist/interfaces';

@Injectable()
export class PostLoginService {

  private readonly logger: Logger;

  constructor (
    @InjectModel(Hashes.name)
    private readonly hashesModule: Model<HashesDocument>,
    @InjectModel(Users.name)
    private readonly usersModule: Model<UsersDocument>,
    private readonly securityService: SecurityService
  ) {

    this.logger = new Logger(PostLoginService.name);

  }
  
  async execute(reqPostLoginDto: ReqPostLoginDto) {

    const findOneHashById = await this.findOneHashById(reqPostLoginDto.id);

    this.logger.log(`${JSON.stringify(PostLoginService.name)}::execute::[reqPostLoginDto] ${JSON.stringify(reqPostLoginDto)}`);

    if(!findOneHashById) {
      throw new ConflictException('Los datos ingresados son incorrectos');
    }

    const decryptDataCredentials : any = CryptoUtil.decryptData(reqPostLoginDto.hash, findOneHashById.hashes.from, findOneHashById.keys.to);

    const parseJsonDecryptDataCredentials = JSON.parse(decryptDataCredentials);
    const decryptDataEmail = CryptoUtil.decryptData(parseJsonDecryptDataCredentials.encryptDataEmail, findOneHashById.hashes.from, findOneHashById.keys.from);
    const decryptDataPassword = CryptoUtil.decryptData(parseJsonDecryptDataCredentials.encryptDataPassword, findOneHashById.hashes.to, findOneHashById.keys.to);

    const findUserByEmail = await this.findUserByEmail(decryptDataEmail);

    if(!findUserByEmail) {
      throw new ConflictException('Usuario no se encuentra registrado o se encuentra eliminado');
    }

    if(findUserByEmail.password !== decryptDataPassword) {
      throw new ConflictException('Email y/o password son incorrectos');
    }

    return await this.securityService.createToken(<RequestCreateTokenInterface> { email: findUserByEmail.email, password: findUserByEmail.password })

  }

  private findOneHashById = (idHash: string) => {
    return this.hashesModule.findById(idHash, { hashes: 1, keys: 1 }).exec();
  }

  private findUserByEmail = (decryptDataEmail: string) => {
    return this.usersModule.findOne({ email: decryptDataEmail, recordActive: true }, { email: 1, password: 1, auditProperties: 1 }).exec();
  }

  private generateTokenJWT = (user) => {
    return 'dsadsanjkdnsajkdnsandsakndjksandjksandjksandjksanjkdsankdnksandjksandjksanjkdnsjandnqwjeqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'
  }

  private deleteHashes = () => {
    
  }
}
