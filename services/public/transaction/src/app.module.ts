import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SecurityModule } from '@corp.startup.business.stock.backend.nodejs.nestjs/security/dist/security.module';

import configSetup from './config/constant-setup.config';
import {
  PurchaseOrders,
  PurchaseOrdersSchema,
  PurchaseRequests,
  PurchaseRequestsSchema,
  Quotes,
  QuotesSchema,
} from './schemas';

import { ResponseInterceptor } from './interceptors/response.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configSetup],
    }),
    SecurityModule.registerAsync({
      global: false,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('client.security'),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        /**
         * connection database to localhost
         */
        uri: configService.get('database.mongodb.local.uri'),

        /**
         * conecction database to production
         */
        /*...configService.get('mongodb'),
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true*/
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: PurchaseOrders.name, schema: PurchaseOrdersSchema },
      { name: PurchaseRequests.name, schema: PurchaseRequestsSchema },
      { name: Quotes.name, schema: QuotesSchema },
    ]),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
