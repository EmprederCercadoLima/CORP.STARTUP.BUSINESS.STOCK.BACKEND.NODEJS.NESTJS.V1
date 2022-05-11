import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { controllerConfig } from 'src/config/constant-controller.config';
import { PostCreateDto } from './dto';
import { PostCreateService } from './services';

@Controller(controllerConfig.name)
@ApiTags(controllerConfig.tag)
export class AppController {
  constructor(private readonly postCreateService: PostCreateService) {}

  @ApiOperation({
    summary:
      controllerConfig.modules.purchaseRequest.apis.postCreate.operation
        .summary,
  })
  @Post(controllerConfig.modules.purchaseRequest.apis.postCreate.name)
  postCreate(@Body() postCreate: PostCreateDto) {
    return this.postCreateService.execute(postCreate);
  }
}
