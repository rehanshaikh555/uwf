import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.class.findMany({
      where: { deletedAt: null },
      include: {
        department: true,
        teacher: { include: { user: true } },
      },
    });
  }

  async create(data: any) {
    return this.prisma.class.create({ data });
  }
}
