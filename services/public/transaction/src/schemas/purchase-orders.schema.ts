import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { schemaConfig } from '../config/constant-schema.config';

export type PurchaseOrdersDocument = PurchaseOrders & Document;

@Schema({ collection: schemaConfig.purchaseOrders })
export class PurchaseOrders {
  @Prop(
    raw({
      type: {
        userId: String,
        email: String,
        fullName: String,
      },
    }),
  )
  grocer: {
    userId: string;
    email: string;
    fullName: string;
  };

  @Prop(
    raw({
      type: {
        dateCreate: Date,
        dateUpdate: Date,
        userCreate: String,
        userUpdate: String,
        recordActive: Boolean,
        _id: false,
      },
    }),
  )
  auditProperties: {
    dateCreate: Date;
    dateUpdate: Date;
    userCreate: string;
    userUpdate: string;
    recordActive: boolean;
  };
}

export const PurchaseOrdersSchema =
  SchemaFactory.createForClass(PurchaseOrders);
