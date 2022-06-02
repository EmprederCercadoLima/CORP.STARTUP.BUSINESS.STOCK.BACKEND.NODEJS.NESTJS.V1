import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { schemasConstant } from '@corp.startup.business.stock.backend.nodejs.nestjs/utils/dist';

export type LogPurchaseRequestsDocument = LogPurchaseRequests & Document;

@Schema({ collection: schemasConstant.logPurchaseRequests })
export class LogPurchaseRequests {

  @Prop({ type: Object })
  token: Object;

  @Prop({ type: Object })
  requestBody: Object;

  @Prop()
  level: number

  @Prop({ type: String })
  message: string;

  @Prop({ type: String })
  errors: string;

  @Prop(
    raw({
      type: {
        dateCreate: Date,
        recordActive: Boolean,
        _id: false,
      },
    }),
  )
  auditProperties: {
    dateCreate: Date;
    recordActive: boolean;
  };

}

export const LogPurchaseRequestsSchema =
  SchemaFactory.createForClass(LogPurchaseRequests);
