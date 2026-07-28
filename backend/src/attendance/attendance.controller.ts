import { Controller, Post, Get, Body, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AttendanceService } from './attendance.service';
import { CheckInDto } from './dto/check-in.dto';
import { BulkStudentAttendanceDto } from './dto/student-attendance.dto';

@ApiTags('attendance')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('attendance')
export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  @Post('check-in')
  @ApiOperation({ summary: 'Teacher check-in' })
  async checkIn(@Request() req, @Body() dto: CheckInDto) {
    if (!req.user.teacherId) throw new UnauthorizedException('Not a teacher');
    return this.attendanceService.checkIn(req.user.teacherId, dto);
  }

  @Post('check-out')
  @ApiOperation({ summary: 'Teacher check-out' })
  async checkOut(@Request() req) {
    if (!req.user.teacherId) throw new UnauthorizedException('Not a teacher');
    return this.attendanceService.checkOut(req.user.teacherId);
  }

  @Get('status')
  @ApiOperation({ summary: 'Get today check-in status' })
  async getStatus(@Request() req) {
    if (!req.user.teacherId) throw new UnauthorizedException('Not a teacher');
    return this.attendanceService.getTeacherDailyStatus(req.user.teacherId);
  }

  @Get('history')
  @ApiOperation({ summary: 'Get teacher attendance history' })
  async getHistory(@Request() req) {
    if (!req.user.teacherId) throw new UnauthorizedException('Not a teacher');
    return this.attendanceService.getTeacherHistory(req.user.teacherId);
  }

  @Post('students')
  @ApiOperation({ summary: 'Mark student attendance' })
  async markStudents(@Request() req, @Body() dto: BulkStudentAttendanceDto) {
    // Both ADMIN and TEACHER can mark student attendance
    // If teacher, use their ID
    const takerId = req.user.teacherId || req.user.id;
    return this.attendanceService.markStudentAttendance(takerId, dto);
  }
}
