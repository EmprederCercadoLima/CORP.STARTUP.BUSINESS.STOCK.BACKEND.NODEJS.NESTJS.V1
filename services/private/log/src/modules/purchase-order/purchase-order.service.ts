import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import * as moment from 'moment';
import { LogPurchaseOrders, LogPurchaseOrdersDocument } from '../../schemas'
import { Model } from 'mongoose'

@Injectable()
export class PurchaseOrderService {

    constructor(
        @InjectModel(LogPurchaseOrders.name)
        private readonly logPurchaseOrdersDocument: Model<LogPurchaseOrdersDocument>
    ) {

    }

  purchaseOrderExecute(token: string, requestBody: any, message: any, errors: any) {
    this.logPurchaseOrdersDocument.create({
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
