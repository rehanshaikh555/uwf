import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { DepartmentsService } from './departments.service';

@ApiTags('departments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('departments')
export class DepartmentsController {
  constructor(private departmentsService: DepartmentsService) {}

  @Get()
  async findAll() {
    return this.departmentsService.findAll();
  }

  @Post()
  @Roles(UserRole.ADMIN)
  async create(@Body() data: { name: string }) {
    return this.departmentsService.create(data);
  }
}
