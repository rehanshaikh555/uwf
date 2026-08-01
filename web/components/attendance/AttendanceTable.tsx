"use client";

import AttendanceRow from "./AttendanceRow";
import { Attendance } from "@/types/attendance";

interface Props {
  attendance: Attendance[];
}

export default function AttendanceTable({
  attendance,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">
              Employee
            </th>

            <th>Department</th>

            <th>Check In</th>

            <th>Check Out</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((item) => (
            <AttendanceRow
              key={item.id}
              attendance={item}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}