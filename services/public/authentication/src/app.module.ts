import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { SecurityModule } from '@corp.startup.business.stock.backend.nodejs.nestjs/security/dist/security.module'
import { AppController } from './app.controller'
import configSetup from './config/constant-setup.config'
import { Hashes, HashesSchema, Users, UsersSchema } from './schemas'
import { GetHashService, PostLoginService, PostLogoutService, PostRecoveryPasswordService } from './services'
import { ResponseInterceptor } from './interceptors/response.interceptor'
import { HashesListener } from './listeners/hashes.listener'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configSetup],
    }),
    EventEmitterModule.forRoot(),
    SecurityModule.registerAsync({
      global: false,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('client.security'),
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
      { name: Hashes.name, schema: HashesSchema },
      { name: Users.name, schema: UsersSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [
    GetHashService,
    PostLoginService,
    PostLogoutService,
    PostRecoveryPasswordService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    HashesListener,
  ],
})
export class AppModule {}
