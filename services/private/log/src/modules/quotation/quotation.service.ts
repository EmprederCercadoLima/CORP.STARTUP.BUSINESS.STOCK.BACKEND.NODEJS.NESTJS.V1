import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import * as moment from 'moment';
import { LogQuotations, LogQuotationsDocument } from '../../schemas'
import { Model } from 'mongoose'

@Injectable()
export class QuotationService {

    constructor(
        @InjectModel(LogQuotations.name)
        private readonly logQuotationsDocument: Model<LogQuotationsDocument>
    ) {

    }

  quotationExecute(token: string, requestBody: any, message: any, errors: any) {
    this.logQuotationsDocument.create({
      token,
      requestBody,
      message,
      errors,
      level: 1,
      auditProperties: {
        dateCreate: moment.utc(),
        recordActive: true
      }
    });
  }

}
