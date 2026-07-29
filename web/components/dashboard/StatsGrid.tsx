import {
  GraduationCap,
  Users,
  ClipboardCheck,
  UserX,
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Teachers"
        value="48"
        icon={Users}
        color="bg-blue-600"
        change="+5%"
      />

      <StatsCard
        title="Students"
        value="1250"
        icon={GraduationCap}
        color="bg-indigo-600"
      />

      <StatsCard
        title="Present Today"
        value="1188"
        icon={ClipboardCheck}
        color="bg-green-600"
        change="+2%"
      />

      <StatsCard
        title="Absent"
        value="62"
        icon={UserX}
        color="bg-red-500"
      />
    </div>
  );
}