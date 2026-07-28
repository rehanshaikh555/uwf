import React from 'react';
import {
  Users,
  UserCheck,
  UserX,
  FileText,
  GraduationCap,
  TrendingUp
} from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, color, trend }: any) => (
  <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      {trend && (
        <span className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
          <TrendingUp className="w-3 h-3 mr-1" />
          {trend}
        </span>
      )}
    </div>
    <p className="text-gray-500 text-sm font-medium">{label}</p>
    <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back, here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Teachers"
          value="48"
          icon={Users}
          color="bg-blue-600"
        />
        <StatCard
          label="Present Today"
          value="42"
          icon={UserCheck}
          color="bg-emerald-600"
          trend="+5%"
        />
        <StatCard
          label="Absent Today"
          value="6"
          icon={UserX}
          color="bg-red-500"
        />
        <StatCard
          label="Total Students"
          value="1,250"
          icon={GraduationCap}
          color="bg-indigo-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm min-h-[400px]">
          <h3 className="text-lg font-semibold mb-6">Attendance Trends</h3>
          <div className="flex items-center justify-center h-full text-gray-400">
            {/* Chart would go here - using Recharts in implementation */}
            Attendance Graph Placeholder
          </div>
        </div>
        <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full text-left p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span className="font-medium text-gray-700">Generate Daily Report</span>
              <FileText className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-full text-left p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span className="font-medium text-gray-700">Add New Teacher</span>
              <Users className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-full text-left p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span className="font-medium text-gray-700">Add New Student</span>
              <GraduationCap className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
