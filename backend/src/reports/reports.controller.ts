import { Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { ReportsService } from './reports.service';

@ApiTags('reports')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Get('teachers/excel')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Export teacher attendance to Excel (Admin only)' })
  async exportTeacherExcel(
    @Query('startDate') start: string,
    @Query('endDate') end: string,
    @Res() res: Response,
  ) {
    const startDate = start ? new Date(start) : new Date();
    const endDate = end ? new Date(end) : new Date();
    return this.reportsService.generateTeacherReportExcel(res, startDate, endDate);
  }

  @Get('students/pdf')
  @Roles(UserRole.ADMIN, UserRole.TEACHER)
  @ApiOperation({ summary: 'Export student attendance to PDF' })
  async exportStudentPDF(
    @Query('classId') classId: string,
    @Query('date') dateStr: string,
    @Res() res: Response,
  ) {
    const date = dateStr ? new Date(dateStr) : new Date();
    return this.reportsService.generateStudentReportPDF(res, classId, date);
  }
}
