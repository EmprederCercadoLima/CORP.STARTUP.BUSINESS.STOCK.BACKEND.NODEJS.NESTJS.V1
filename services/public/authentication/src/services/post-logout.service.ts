import { Injectable } from '@nestjs/common'
import { ReqPostLogoutDto } from 'src/dtos'

@Injectable()
export class PostLogoutService {
  execute(reqPostLogoutDto: ReqPostLogoutDto): string {
    return 'Hello World!'
  }
}
