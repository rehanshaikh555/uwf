import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { TeachersService } from './teachers.service';

@ApiTags('teachers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('teachers')
export class TeachersController {
  constructor(private teachersService: TeachersService) {}

  @Get()
  @Roles(UserRole.ADMIN)
  async findAll() {
    return this.teachersService.findAll();
  }

  @Post()
  @Roles(UserRole.ADMIN)
  async create(@Body() data: any) {
    return this.teachersService.create(data);
  }
}
