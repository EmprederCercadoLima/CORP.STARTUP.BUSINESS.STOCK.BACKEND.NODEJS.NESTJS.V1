import { RequestDeleteTokenInterface } from '@corp.startup.business.stock.backend.nodejs.nestjs/security/dist/interfaces'
import { SecurityService } from '@corp.startup.business.stock.backend.nodejs.nestjs/security/dist/security.service'
import { messageResponseConstant } from '@corp.startup.business.stock.backend.nodejs.nestjs/utils/dist'
import { HttpException, Injectable, Logger } from '@nestjs/common'
import { ReqPostLogoutDto } from '../dtos'

@Injectable()
export class PostLogoutService {
  private readonly logger: Logger

  constructor(private readonly securityService: SecurityService) {
    this.logger = new Logger(PostLogoutService.name)
  }

  async execute(reqPostLogoutDto: ReqPostLogoutDto) {
    try {
      await this.securityService.deleteToken(<RequestDeleteTokenInterface>{
        token: reqPostLogoutDto.token,
      })

      return {
        message: messageResponseConstant.delete,
      }
    } catch (error) {
      const { response } = error
      this.logger.error(`error::execute::${JSON.stringify(response.statusCode)}::${JSON.stringify(response.message)}`)
      throw new HttpException(response.message, response.statusCode)
    }
  }
}
