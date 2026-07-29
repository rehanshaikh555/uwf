import {
  AttendanceChart,
  QuickActions,
  RecentAttendance,
  StatsGrid,
} from "@/components/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back to EasyShare Workforce.
        </p>
      </div>

      <StatsGrid />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>

        <QuickActions />
      </div>

      <RecentAttendance />
    </div>
  );
}