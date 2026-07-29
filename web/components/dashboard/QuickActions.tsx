import {
  Plus,
  UserPlus,
  FileText,
  Download,
} from "lucide-react";

const actions = [
  {
    title: "Add Teacher",
    icon: UserPlus,
  },
  {
    title: "Add Student",
    icon: Plus,
  },
  {
    title: "Generate Report",
    icon: FileText,
  },
  {
    title: "Export CSV",
    icon: Download,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
      <h2 className="text-lg font-semibold mb-5">
        Quick Actions
      </h2>

      <div className="space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
            >
              <span>{action.title}</span>

              <Icon className="h-5 w-5 text-blue-600" />
            </button>
          );
        })}
      </div>
    </div>
  );
}