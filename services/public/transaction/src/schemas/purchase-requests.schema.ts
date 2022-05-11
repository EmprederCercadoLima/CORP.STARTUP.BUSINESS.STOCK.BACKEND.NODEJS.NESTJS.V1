import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { schemaConfig } from '../config/constant-schema.config';

export type PurchaseRequestsDocument = PurchaseRequests & Document;

@Schema({ collection: schemaConfig.purchaseRequests })
export class PurchaseRequests {
  @Prop(
    raw({
      type: {
        idUser: String,
        email: String,
        fullName: String,
      },
    }),
  )
  grocer: {
    idUser: string;
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

export const PurchaseRequestsSchema =
  SchemaFactory.createForClass(PurchaseRequests);
