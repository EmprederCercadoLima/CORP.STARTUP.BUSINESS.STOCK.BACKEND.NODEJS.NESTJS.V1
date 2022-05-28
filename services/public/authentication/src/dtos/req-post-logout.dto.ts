import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ReqPostLogoutDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly token: string
}
