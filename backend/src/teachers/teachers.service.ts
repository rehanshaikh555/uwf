import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserRole } from '@prisma/client';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.teacher.findMany({
      where: { deletedAt: null },
      include: {
        user: true,
        department: true,
      },
    });
  }

  async create(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        fullName: data.fullName,
        role: UserRole.TEACHER,
        teacher: {
          create: {
            employeeId: data.employeeId,
            phoneNumber: data.phoneNumber,
            departmentId: data.departmentId,
          },
        },
      },
    });
  }
}
