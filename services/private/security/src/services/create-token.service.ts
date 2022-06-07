import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment'
import { RequestCreateTokenInterface } from '../interfaces';
import { PayloadInterface } from '../jwt';
import { Tokens, TokensDocument } from '../schemas';

@Injectable()
export class CreateTokenService {

  private readonly logger: Logger

  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(Tokens.name)
    private readonly tokensModule: Model<TokensDocument>,
    
  ) {
    this.logger = new Logger(CreateTokenService.name)
  }

  async execute(requestCreateTokenInterface: RequestCreateTokenInterface) {
    const token = this.getToken({ ...requestCreateTokenInterface });
    await this.createOrUpdateToken(requestCreateTokenInterface.email, token)
    return token;
  }

  private getToken = (payload: PayloadInterface) => {
    
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      algorithm: "HS256",
      expiresIn: process.env.JWT_EXPIRESIN
    });
  }

  private createOrUpdateToken = async (email: string, token: string) => {

    try {
      const existUser = await this.tokensModule.findOne({ email }).exec();

      if(existUser) {
        this.tokensModule.findOneAndUpdate({
          email,
        }, {
          $addToSet: {
            tokens: token
          }
        }).exec();
      } else {
        this.tokensModule.create({
          email,
          tokens: [
            token
          ],
          auditProperties: this.generateAuditProperties()
        })
      }

    } catch (error) {
      this.logger.error(`${JSON.stringify(CreateTokenService.name)}::execute::createOrUpdateToken failed ${error}`)
      throw new Error();
    }

  }

  private generateAuditProperties = () => {
    return {
      userCreate: 'WEB',
      userUpdate: null,
      dateCreate: moment.utc(),
      dateUpdate: null,
      recordActive: true,
    }
  }
}
