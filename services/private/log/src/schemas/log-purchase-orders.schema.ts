import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { schemasConstant } from '@corp.startup.business.stock.backend.nodejs.nestjs/utils/dist';

export type LogPurchaseOrdersDocument = LogPurchaseOrders & Document;

@Schema({ collection: schemasConstant.logPurchaseOrders })
export class LogPurchaseOrders {}

export const LogPurchaseOrdersSchema =
  SchemaFactory.createForClass(LogPurchaseOrders);
