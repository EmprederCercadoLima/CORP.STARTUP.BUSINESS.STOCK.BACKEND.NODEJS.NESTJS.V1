import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuotationTcpController } from "./quotation.tcp.controller";
import {
    LogQuotations,
    LogQuotationsSchema
  } from '../../schemas';
import { QuotationService } from "./quotation.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: LogQuotations.name, schema: LogQuotationsSchema }
          ])
    ],
    providers: [ QuotationService ],
    controllers: [QuotationTcpController],

})
export class QuotationModule {}