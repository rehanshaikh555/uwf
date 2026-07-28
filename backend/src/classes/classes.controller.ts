import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ClassesService } from './classes.service';

@ApiTags('classes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('classes')
export class ClassesController {
  constructor(private classesService: ClassesService) {}

  @Get()
  async findAll() {
    return this.classesService.findAll();
  }

  @Post()
  async create(@Body() data: any) {
    return this.classesService.create(data);
  }
}
