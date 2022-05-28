import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { mainConfig } from './config/constant-main.config'
import { LoggingInterceptor } from './interceptors'

async function bootstrap() {
  const logger = new Logger()

  const app = await NestFactory.create(AppModule)

  app.useGlobalInterceptors(new LoggingInterceptor())

  const configService = app.get(ConfigService)

  const httpHost = configService.get('http.host')
  const httpPort = configService.get('http.port')

  const { title, description, version, swaggerBasePath } = mainConfig.main

  app.setGlobalPrefix(swaggerBasePath)

  const documentBuilder = new DocumentBuilder().setTitle(title).setDescription(description).setVersion(version).build()

  const document = SwaggerModule.createDocument(app, documentBuilder)
  SwaggerModule.setup(swaggerBasePath, app, document)

  app.enableCors()

  await app.listen(httpPort, httpHost)

  logger.log(`HTTP server listening at http://${httpHost}:${httpPort}`)
  logger.log(`Swagger documentation at http://${httpHost}:${httpPort}${swaggerBasePath}`)
}
bootstrap()
