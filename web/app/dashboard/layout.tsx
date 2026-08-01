import { Sidebar, DashboardHeader } from "@/components/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">

      <Sidebar />

      <main className="ml-72 min-h-screen p-8">

        <DashboardHeader />

        {children}

      </main>

    </div>
  );
}