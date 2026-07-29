"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", attendance: 92 },
  { day: "Tue", attendance: 96 },
  { day: "Wed", attendance: 91 },
  { day: "Thu", attendance: 95 },
  { day: "Fri", attendance: 98 },
  { day: "Sat", attendance: 94 },
];

export default function AttendanceChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
      <h2 className="text-lg font-semibold">
        Weekly Attendance
      </h2>

      <p className="text-sm text-slate-500 mb-6">
        Overall attendance percentage
      </p>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="day" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="attendance"
              stroke="#2563eb"
              fill="#93c5fd"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}