import { Injectable } from '@nestjs/common'
import { ReqPostLogoutDto } from '../dtos'

@Injectable()
export class PostLogoutService {
  execute(reqPostLogoutDto: ReqPostLogoutDto): string {
    return 'Hello World!'
  }
}
