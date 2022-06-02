import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import * as moment from 'moment';
import { LogPurchaseRequests, LogPurchaseRequestsDocument } from '../../schemas'
import { Model } from 'mongoose'

@Injectable()
export class PurchaseRequestService {

    constructor(
        @InjectModel(LogPurchaseRequests.name)
        private readonly logPurchaseRequestsDocument: Model<LogPurchaseRequestsDocument>
    ) {

    }

  purchaseRequestExecute(token: string, requestBody: any, message: any, errors: any) {
    this.logPurchaseRequestsDocument.create({
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
