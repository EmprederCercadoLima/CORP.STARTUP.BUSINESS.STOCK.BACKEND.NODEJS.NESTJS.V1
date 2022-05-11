import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { schemaConfig } from '../config/constant-schema.config';

export type QuotesDocument = Quotes & Document;

@Schema({ collection: schemaConfig.quotes })
export class Quotes {
  @Prop({
    index: true,
  })
  algorithm: string;

  @Prop(
    raw({
      type: {
        from: String,
        to: String,
        _id: false,
      },
    }),
  )
  hashes: {
    from: string;
    to: string;
  };

  @Prop(
    raw({
      type: {
        from: String,
        to: String,
        _id: false,
      },
    }),
  )
  keys: {
    from: string;
    to: string;
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

export const QuotesSchema = SchemaFactory.createForClass(Quotes);
