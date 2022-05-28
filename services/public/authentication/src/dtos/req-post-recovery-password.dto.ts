import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ReqPostRecoveryPasswordDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly id: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly hash: string
}
