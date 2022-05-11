import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RequestCreateTokenInterface } from './interfaces';
import { CreateTokenService, DeleteTokenService, InsertTokenService } from './services';

@Controller()
export class AppController {
  constructor(
    private readonly createTokenService: CreateTokenService,
    private readonly deleteTokenService: DeleteTokenService,
    private readonly insertTokenService: InsertTokenService,
  ) {}

  @MessagePattern({ microservice: 'security', function: 'create-token' })
  createToken(requestCreateTokenInterface : RequestCreateTokenInterface) {
    return this.createTokenService.execute(requestCreateTokenInterface);
  }

  @MessagePattern({ microservice: 'security', function: 'insert-token' })
  insertToken() {
    return this.insertTokenService.execute();
  }

  @MessagePattern({ microservice: 'security', function: 'delete-token' })
  deleteToken() {
    return this.deleteTokenService.execute();
  }

}
