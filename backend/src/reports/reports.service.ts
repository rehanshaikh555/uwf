import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as ExcelJS from 'exceljs';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async generateTeacherReportExcel(res: Response, startDate: Date, endDate: Date) {
    const data = await this.prisma.teacherAttendance.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        teacher: {
          include: {
            user: true,
            department: true,
          },
        },
      },
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Teacher Attendance');

    worksheet.columns = [
      { header: 'Date', key: 'date', width: 15 },
      { header: 'Teacher Name', key: 'name', width: 25 },
      { header: 'Department', key: 'dept', width: 20 },
      { header: 'Check In', key: 'checkIn', width: 20 },
      { header: 'Check Out', key: 'checkOut', width: 20 },
    ];

    data.forEach((att) => {
      worksheet.addRow({
        date: att.date.toISOString().split('T')[0],
        name: att.teacher.user.fullName,
        dept: att.teacher.department.name,
        checkIn: att.checkIn.toLocaleTimeString(),
        checkOut: att.checkOut ? att.checkOut.toLocaleTimeString() : 'N/A',
      });
    });

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=' + 'teacher-attendance.xlsx',
    );

    await workbook.xlsx.write(res);
    res.end();
  }

  async generateStudentReportPDF(res: Response, classId: string, date: Date) {
    const attendance = await this.prisma.studentAttendance.findMany({
      where: {
        classId,
        date,
      },
      include: {
        student: true,
        class: true,
      },
    });

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=student-attendance.pdf');
    doc.pipe(res);

    doc.fontSize(20).text('Student Attendance Report', { align: 'center' });
    doc.moveDown();
    if (attendance.length > 0) {
      doc.fontSize(14).text(`Class: ${attendance[0].class.name} - ${attendance[0].class.section}`);
      doc.text(`Date: ${date.toISOString().split('T')[0]}`);
      doc.moveDown();

      attendance.forEach((att, index) => {
        doc.fontSize(12).text(`${index + 1}. ${att.student.fullName} (${att.student.rollNumber}) - ${att.status}`);
      });
    } else {
      doc.text('No records found for this date.');
    }

    doc.end();
  }
}
