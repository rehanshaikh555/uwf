import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { AttendanceModule } from './attendance/attendance.module';
import { DepartmentsModule } from './departments/departments.module';
import { ClassesModule } from './classes/classes.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    TeachersModule,
    StudentsModule,
    AttendanceModule,
    DepartmentsModule,
    ClassesModule,
    ReportsModule,
  ],
})
export class AppModule {}
