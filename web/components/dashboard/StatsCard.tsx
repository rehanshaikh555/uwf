import { LucideIcon, TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
  change?: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
  change,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${color}`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>

        {change && (
          <div className="flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-600">
            <TrendingUp className="mr-1 h-3 w-3" />
            {change}
          </div>
        )}
      </div>

      <div className="mt-6">
        <p className="text-sm text-slate-500">{title}</p>

        <h2 className="mt-1 text-3xl font-bold text-slate-900">
          {value}
        </h2>
      </div>
    </div>
  );
}