import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { schemasConstant } from '@corp.startup.business.stock.backend.nodejs.nestjs/utils/dist';

export type LogQuotationsDocument = LogQuotations & Document;

@Schema({ collection: schemasConstant.logQuotations })
export class LogQuotations {}

export const LogQuotationsSchema = SchemaFactory.createForClass(LogQuotations);
