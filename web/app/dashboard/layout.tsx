import React from "react";
import { Users } from "lucide-react";
import { Sidebar } from "@/components/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
          <div>
            <h1 className="text-xl font-bold text-slate-800">
              Dashboard
            </h1>

            <p className="text-sm text-slate-500">
              Welcome back
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold text-slate-800">
                Admin User
              </p>

              <p className="text-xs text-slate-500">
                Super Admin
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200">
              <Users className="h-6 w-6 text-slate-600" />
            </div>
          </div>
        </header>

        <section className="p-8">
          {children}
        </section>
      </main>
    </div>
  );
}