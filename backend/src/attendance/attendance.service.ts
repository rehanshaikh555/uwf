import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CheckInDto } from './dto/check-in.dto';
import { BulkStudentAttendanceDto } from './dto/student-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  async checkIn(teacherId: string, dto: CheckInDto) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existing = await this.prisma.teacherAttendance.findFirst({
      where: {
        teacherId,
        date: today,
      },
    });

    if (existing) {
      throw new BadRequestException('Already checked in today');
    }

    return this.prisma.teacherAttendance.create({
      data: {
        teacherId,
        date: today,
        checkIn: new Date(),
        deviceId: dto.deviceId,
        latitude: dto.latitude,
        longitude: dto.longitude,
      },
    });
  }

  async checkOut(teacherId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const attendance = await this.prisma.teacherAttendance.findFirst({
      where: {
        teacherId,
        date: today,
      },
    });

    if (!attendance) {
      throw new BadRequestException('No check-in record found for today');
    }

    if (attendance.checkOut) {
      throw new BadRequestException('Already checked out today');
    }

    return this.prisma.teacherAttendance.update({
      where: { id: attendance.id },
      data: { checkOut: new Date() },
    });
  }

  async markStudentAttendance(teacherId: string, dto: BulkStudentAttendanceDto) {
    const date = new Date(dto.date);
    date.setHours(0, 0, 0, 0);

    // Verify teacher is assigned to this class (optional check depending on strictness)
    // For now, assume any teacher can take attendance if they have the classId

    const operations = dto.records.map((record) => {
      return this.prisma.studentAttendance.upsert({
        where: {
          studentId_date: {
            studentId: record.studentId,
            date,
          },
        },
        update: {
          status: record.status,
          takenBy: teacherId,
        },
        create: {
          studentId: record.studentId,
          classId: dto.classId,
          date,
          status: record.status,
          takenBy: teacherId,
        },
      });
    });

    return Promise.all(operations);
  }

  async getTeacherDailyStatus(teacherId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.prisma.teacherAttendance.findFirst({
      where: {
        teacherId,
        date: today,
      },
    });
  }

  async getTeacherHistory(teacherId: string) {
    return this.prisma.teacherAttendance.findMany({
      where: { teacherId },
      orderBy: { date: 'desc' },
      take: 30,
    });
  }
}
