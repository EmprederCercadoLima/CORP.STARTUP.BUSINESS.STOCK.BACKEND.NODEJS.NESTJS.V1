import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsNumber } from 'class-validator';

class Details {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  idProduct: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantity: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  idTypeMeasure: string;
}

export class PostCreateDto {
  @IsArray()
  @ApiProperty({ type: Details, isArray: true })
  details: Array<Details>;
}
