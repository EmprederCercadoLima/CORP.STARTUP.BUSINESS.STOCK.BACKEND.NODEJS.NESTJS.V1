import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RequestCreateTokenInterface, RequestValidateTokenInterface, RequestDeleteTokenInterface } from './interfaces';
import { CreateTokenService, DeleteTokenService, InsertTokenService, ValidateTokenService } from './services';

@Controller()
export class AppController {
  constructor(
    private readonly createTokenService: CreateTokenService,
    private readonly deleteTokenService: DeleteTokenService,
    private readonly insertTokenService: InsertTokenService,
    private readonly validateTokenService: ValidateTokenService
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
  deleteToken(requestDeleteTokenInterface: RequestDeleteTokenInterface) {
    return this.deleteTokenService.execute(requestDeleteTokenInterface);
  }

  @MessagePattern({ microservice: 'security', function: 'validate-token' })
  validateToken(requestValidateTokenInterface: RequestValidateTokenInterface) {
    return this.validateTokenService.execute(requestValidateTokenInterface);
  }
  
}
