"use client";

import { Attendance } from "@/types/attendance";

interface Props {
  attendance: Attendance;
}

export default function AttendanceRow({
  attendance,
}: Props) {
  return (
    <tr className="border-b hover:bg-slate-50">
      <td className="px-6 py-4 font-medium">
        {attendance.employee}
      </td>

      <td>{attendance.department}</td>

      <td>{attendance.checkIn}</td>

      <td>{attendance.checkOut || "--"}</td>

      <td>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            attendance.status === "Present"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {attendance.status}
        </span>
      </td>
    </tr>
  );
}