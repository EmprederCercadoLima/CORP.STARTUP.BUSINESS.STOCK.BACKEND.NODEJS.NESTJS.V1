import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { schemaConfig } from '../config/constant-schema.config';

export type TokensDocument = Tokens & Document;

@Schema({ collection: schemaConfig.tokens })
export class Tokens {
  @Prop({
    index: true
  })
  email: string;

  @Prop(
      raw({
          type: [],
          default: () => ([])
      })
  )
  tokens: string[]

  @Prop(
    raw({
        type: {
            dateCreate: Date,
            dateUpdate: Date,
            userCreate: String,
            userUpdate: String,
            recordActive: Boolean,
            _id : false
        }
    })
  )
  auditProperties: {
    dateCreate: Date;
    dateUpdate: Date;
    userCreate: string;
    userUpdate: string;
    recordActive: boolean;
  }

}

export const TokensSchema = SchemaFactory.createForClass(Tokens);
