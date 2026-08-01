"use client";

import {
  Bell,
  Search,
  Sun,
  ChevronDown,
  UserCircle2,
} from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 mb-8 flex h-20 items-center justify-between rounded-2xl border border-slate-200 bg-white px-8 shadow-sm">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          {today}
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden lg:block">

          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400"/>

          <input
            placeholder="Search..."
            className="w-80 rounded-xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl border border-slate-200 p-3 hover:bg-slate-100">

          <Bell className="h-5 w-5"/>

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"/>

        </button>

        {/* Theme */}

        <button className="rounded-xl border border-slate-200 p-3 hover:bg-slate-100">

          <Sun className="h-5 w-5"/>

        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-100">

          <UserCircle2 className="h-10 w-10 text-blue-600"/>

          <div className="hidden text-left lg:block">

            <p className="font-semibold">
              Admin User
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

          <ChevronDown className="h-4 w-4"/>

        </button>

      </div>

    </header>
  );
}