import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.department.findMany({
      where: { deletedAt: null },
    });
  }

  async create(data: { name: string }) {
    return this.prisma.department.create({ data });
  }
}
