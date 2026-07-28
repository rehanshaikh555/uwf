import { IsArray, IsDateString, IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AttendanceStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

class StudentAttendanceRecord {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  studentId: string;

  @ApiProperty({ enum: AttendanceStatus })
  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;
}

export class BulkStudentAttendanceDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  classId: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty({ type: [StudentAttendanceRecord] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StudentAttendanceRecord)
  records: StudentAttendanceRecord[];
}
