import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configSetup from './config/constant-setup.config';
import { PurchaseOrderModule } from './modules/purchase-order/purchase-order.module';
import { PurchaseRequestModule } from './modules/purchase-request/purchase-request.module';
import { QuotationModule } from './modules/quotation/quotation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configSetup],
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
    PurchaseOrderModule,
    PurchaseRequestModule,
    QuotationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
