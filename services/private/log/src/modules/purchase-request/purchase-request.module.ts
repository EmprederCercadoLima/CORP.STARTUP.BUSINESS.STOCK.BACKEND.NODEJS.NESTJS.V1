import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'
import { PurchaseRequestService } from "./purchase-request.service";
import { PurchaseRequestTcpController } from "./purchase-request.tcp.controller";
import {
    LogPurchaseRequests,
    LogPurchaseRequestsSchema
  } from '../../schemas';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: LogPurchaseRequests.name, schema: LogPurchaseRequestsSchema }
          ])
    ],
    controllers: [ PurchaseRequestTcpController ],
    providers: [ PurchaseRequestService ],

})
export class PurchaseRequestModule {}