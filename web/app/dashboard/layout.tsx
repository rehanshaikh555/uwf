import React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  FileText,
  Settings,
  LogOut
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, href }: { icon: any, label: string, href: string }) => (
  <Link
    href={href}
    className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg group"
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </Link>
);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4">
        <div className="flex items-center gap-3 px-4 py-6 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Attendance</h1>
        </div>

        <nav className="flex-1 space-y-1">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" href="/dashboard" />
          <SidebarItem icon={Users} label="Teachers" href="/dashboard/teachers" />
          <SidebarItem icon={GraduationCap} label="Students" href="/dashboard/students" />
          <SidebarItem icon={BookOpen} label="Classes" href="/dashboard/classes" />
          <SidebarItem icon={FileText} label="Reports" href="/dashboard/reports" />
          <SidebarItem icon={Settings} label="Settings" href="/dashboard/settings" />
        </nav>

        <div className="pt-4 border-t border-gray-200">
          <SidebarItem icon={LogOut} label="Logout" href="/login" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-gray-800">Overview</h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
              <Users className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
