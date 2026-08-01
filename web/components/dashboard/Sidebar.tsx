"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  CalendarDays,
  FileBarChart2,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const menu = [
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
    icon: CalendarDays,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: FileBarChart2,
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
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}

      <div className="border-b p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">

            <ShieldCheck className="h-7 w-7 text-white" />

          </div>

          <div>

            <h2 className="text-xl font-bold">

              EasyShare

            </h2>

            <p className="text-sm text-slate-500">

              Workforce Suite

            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">

        {menu.map((item) => {

          const active = pathname === item.href;

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all

              ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <item.icon className="h-5 w-5" />

              <span className="font-medium">

                {item.title}

              </span>

            </Link>

          );

        })}

      </nav>

      {/* Bottom */}

      <div className="border-t p-5">

        <div className="mb-5 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">

            A

          </div>

          <div>

            <h4 className="font-semibold">

              Admin User

            </h4>

            <p className="text-sm text-slate-500">

              Administrator

            </p>

          </div>

        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-200 py-3 text-red-600 transition hover:bg-red-50">

          <LogOut className="h-5 w-5" />

          Logout

        </button>

      </div>

    </aside>
  );
}