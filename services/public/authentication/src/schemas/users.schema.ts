import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { schemaConfig } from '../config/constant-schema.config'

export type UsersDocument = Users & Document

@Schema({ collection: schemaConfig.users })
export class Users {
  @Prop({
    index: true,
    unique: true,
  })
  email: string

  @Prop({
    index: true,
  })
  firstName: string

  @Prop({
    index: true,
  })
  lastName: string

  @Prop(
    raw({
      type: {
        code: String,
        description: String,
        value: Number,
        _id: false,
      },
    }),
  )
  documentType: {
    code: string
    description: string
    value: number
  }

  @Prop({
    index: true,
  })
  password: string

  @Prop(
    raw({
      type: {
        code: String,
        description: String,
        _id: false,
      },
    }),
  )
  profile: {
    code: string
    description: string
  }

  @Prop(
    raw({
      type: [],
      default: () => [],
    }),
  )
  grocers: string[]

  @Prop(
    raw({
      type: [],
      default: () => [],
    }),
  )
  permissions: string[]

  @Prop(
    raw({
      type: {
        description: String,
        value: Number,
        _id: false,
      },
    }),
  )
  status: {
    description: string
    value: number
  }

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
    dateCreate: Date
    dateUpdate: Date
    userCreate: string
    userUpdate: string
    recordActive: boolean
  }
}

export const UsersSchema = SchemaFactory.createForClass(Users)
