"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardCheck,
  FileText,
  Settings,
  LogOut,
  Building2,
} from "lucide-react";
import clsx from "clsx";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Teachers",
    href: "/dashboard/teachers",
    icon: Users,
  },
  {
    title: "Students",
    href: "/dashboard/students",
    icon: GraduationCap,
  },
  {
    title: "Attendance",
    href: "/dashboard/attendance",
    icon: ClipboardCheck,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white shadow-sm">

      {/* Logo */}

      <div className="border-b border-slate-200 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">

            <Building2 className="h-7 w-7 text-white" />

          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              EasyShare
            </h2>

            <p className="text-sm text-slate-500">
              Workforce
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={clsx(
                "group flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200",

                active
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
              )}
            >
              <Icon
                className={clsx(
                  "h-5 w-5",

                  active
                    ? "text-white"
                    : "group-hover:text-blue-600"
                )}
              />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 p-5">

        <div className="mb-5 rounded-xl bg-slate-100 p-4">

          <p className="text-sm font-semibold text-slate-800">
            Admin User
          </p>

          <p className="text-xs text-slate-500">
            Super Administrator
          </p>

        </div>

        <Link
          href="/login"
          className="flex items-center gap-3 rounded-xl border border-red-200 px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />

          Logout
        </Link>

      </div>

    </aside>
  );
}