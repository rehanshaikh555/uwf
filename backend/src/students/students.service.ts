import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async findAll(classId?: string) {
    return this.prisma.student.findMany({
      where: {
        deletedAt: null,
        ...(classId ? { classId } : {}),
      },
      include: { class: true },
    });
  }

  async create(data: any) {
    return this.prisma.student.create({ data });
  }
}
