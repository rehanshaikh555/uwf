"use client";

import {
  AttendanceStats,
  AttendanceToolbar,
  AttendanceTable,
} from "@/components/attendance";

import { Attendance } from "@/types/attendance";

const attendanceData: Attendance[] = [
  {
    id: 1,
    employee: "John Doe",
    department: "IT",
    checkIn: "09:00",
    checkOut: "18:00",
    status: "Present",
  },
  {
    id: 2,
    employee: "Sarah Smith",
    department: "HR",
    checkIn: "08:55",
    checkOut: "18:10",
    status: "Present",
  },
  {
    id: 3,
    employee: "David Lee",
    department: "Finance",
    checkIn: "--",
    checkOut: "--",
    status: "Absent",
  },
];

export default function AttendancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Attendance
        </h1>

        <p className="text-slate-500">
          Manage workforce attendance.
        </p>
      </div>

      <AttendanceStats />

      <AttendanceToolbar />

      <AttendanceTable
        attendance={attendanceData}
      />
    </div>
  );
}