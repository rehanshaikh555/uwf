import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckInDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  deviceId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  longitude?: number;
}
