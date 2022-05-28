import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class ReqPostLoginDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly id: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly hash: string
}
