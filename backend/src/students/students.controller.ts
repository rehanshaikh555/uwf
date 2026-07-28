import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { StudentsService } from './students.service';

@ApiTags('students')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  async findAll(@Query('classId') classId: string) {
    return this.studentsService.findAll(classId);
  }

  @Post()
  async create(@Body() data: any) {
    return this.studentsService.create(data);
  }
}
