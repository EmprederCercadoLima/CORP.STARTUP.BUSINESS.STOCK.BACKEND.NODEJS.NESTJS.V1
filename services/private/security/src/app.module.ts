import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import configSetup from './config/constant-setup.config';
import { Tokens, TokensSchema } from './schemas';
import { CreateTokenService, DeleteTokenService, InsertTokenService, ValidateTokenService } from './services';

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
      inject: [ConfigService]
    }),
    MongooseModule.forFeature([
      { name: Tokens.name, schema: TokensSchema }
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [CreateTokenService, DeleteTokenService, InsertTokenService, ValidateTokenService],
})
export class AppModule {}
