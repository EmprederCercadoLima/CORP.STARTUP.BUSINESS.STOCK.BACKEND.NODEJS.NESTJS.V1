import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { schemaConfig } from '../config/constant-schema.config';

export type UsersDocument = Users & Document;

@Schema({ collection: schemaConfig.users })
export class Users {
  @Prop({
    index: true,
    unique: true,
  })
  email: string;

  @Prop({
    index: true
  })
  password: string;

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

export const UsersSchema = SchemaFactory.createForClass(Users);
