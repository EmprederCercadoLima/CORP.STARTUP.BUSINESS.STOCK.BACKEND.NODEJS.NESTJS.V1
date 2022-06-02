import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();

  //  const app = await NestFactory.create(AppModule, { logger: logger });

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.SETUP_TCP_HOST,
        port: +process.env.SETUP_TCP_PORT,
      },
      logger: logger,
    },
  );
  await app.listen();

  logger.log(
    `TCP server listening at tcp://${process.env.SETUP_TCP_HOST}:${process.env.SETUP_TCP_PORT}`,
  );
}
bootstrap();
