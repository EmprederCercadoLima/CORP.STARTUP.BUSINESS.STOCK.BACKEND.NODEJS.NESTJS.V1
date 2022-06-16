import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { controllerConfig } from './config/constant-controller.config'
import { ReqPostLoginDto, ReqPostLogoutDto, ReqPostRecoveryPasswordDto } from './dtos'

import { GetHashService, PostLoginService, PostLogoutService, PostRecoveryPasswordService } from './services'

@Controller(controllerConfig.name)
@ApiTags(controllerConfig.tag)
export class AppController {
  constructor(
    private readonly getHashService: GetHashService,
    private readonly postLoginService: PostLoginService,
    private readonly postLogoutService: PostLogoutService,
    private readonly postRecoveryPasswordService: PostRecoveryPasswordService,
  ) {}

  @ApiOperation({
    summary: controllerConfig.apis.getHash.operation.summary,
  })
  @Get(controllerConfig.apis.getHash.name)
  getHash() {
    return this.getHashService.execute()
  }

  @ApiOperation({
    summary: controllerConfig.apis.postLogin.operation.summary,
  })
  @Post(controllerConfig.apis.postLogin.name)
  postLogin(@Body() reqPostLoginDto: ReqPostLoginDto) {
    return this.postLoginService.execute(reqPostLoginDto)
  }

  @ApiOperation({
    summary: controllerConfig.apis.postLogout.operation.summary,
  })
  @Post(controllerConfig.apis.postLogout.name)
  postLogout(@Body() reqPostLogoutDto: ReqPostLogoutDto) {
    return this.postLogoutService.execute(reqPostLogoutDto)
  }

  @ApiOperation({
    summary: controllerConfig.apis.postRecoveryPassword.operation.summary,
  })
  @Post(controllerConfig.apis.postRecoveryPassword.name)
  postRecoveryPassword(@Body() reqPostRecoveryPasswordDto: ReqPostRecoveryPasswordDto) {
    return this.postRecoveryPasswordService.execute(reqPostRecoveryPasswordDto)
  }
}
