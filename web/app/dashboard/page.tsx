"use client";

import {
  StatsGrid,
  AttendanceChart,
  RecentAttendance,
  QuickActions,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold">
          Welcome Back, Admin 👋
        </h1>

        <p className="mt-3 text-blue-100">
          Here's today's workforce summary.
        </p>
      </div>

      <StatsGrid />

      <AttendanceChart />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <RecentAttendance />

        <QuickActions />

      </div>

    </div>
  );
}