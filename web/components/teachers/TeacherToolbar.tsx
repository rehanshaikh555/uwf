"use client";

import { Search, Plus, Download } from "lucide-react";

interface Props {
  onAdd: () => void;
}

export default function TeacherToolbar({
  onAdd,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      <div className="relative w-full lg:w-96">

        <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />

        <input
          type="text"
          placeholder="Search teacher..."
          className="w-full rounded-xl border py-3 pl-10 pr-4 outline-none focus:border-blue-500"
        />

      </div>

      <div className="flex gap-3">

        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-slate-100">

          <Download className="h-5 w-5" />

          Export

        </button>

        <button
          onClick={onAdd}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />

          Add Teacher

        </button>

      </div>

    </div>
  );
}