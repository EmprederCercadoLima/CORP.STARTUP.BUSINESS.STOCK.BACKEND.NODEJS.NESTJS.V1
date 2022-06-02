import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';
import { Tokens, TokensDocument } from '../schemas';

@Injectable()
export class InsertTokenService {
  
  private readonly logger: Logger;

  constructor (
    @InjectModel(Tokens.name)
    private readonly tokensModule: Model<TokensDocument>,
  ) {

    this.logger = new Logger(InsertTokenService.name);

  }
  
  async execute() {
    const email = ''
    const token = ''
    const existTokensByEmail = this.existTokensByEmail(email);

    if(existTokensByEmail) {
      const pushAndSetToken = this.pushAndSetToken(email, token);
      return pushAndSetToken
    } else {
      const insertToken = this.insertToken(email, token);
      return insertToken
    }

  }

  private existTokensByEmail = (email: string) => {
    const count = this.tokensModule.count({ email }).exec();
    return !!count
  }

  private generateAuditProperties = () => {
    return {
      userCreate: 'WEB',
      userUpdate: null,
      dateCreate: moment.utc(),
      dateUpdate: null,
      recordActive: true
    }
  }

  private pushAndSetToken = (email: string, token: string) => {
    return this.tokensModule.findOneAndUpdate(
      {
        email
      },
      {
        $push: {
          tokens: token
        },
        $set: {
          "auditProperties.dateUpdate": moment.utc(),
          "auditProperties.userUpdate": email
        }
      }
    ).exec();
  }

  private insertToken = (email: string, token: string) => {
    return this.tokensModule.create({
      email,
      tokens: [ token ],
      auditProperties: this.generateAuditProperties()
    });
  }

}
