"use client";

import { Edit2, Trash2, UserCircle2 } from "lucide-react";
import { Teacher } from "@/types/teacher";

interface Props {
  teacher: Teacher;
  onEdit: (teacher: Teacher) => void;
  onDelete: (teacher: Teacher) => void;
}

export default function TeacherRow({
  teacher,
  onEdit,
  onDelete,
}: Props) {
  return (
    <tr className="border-b transition hover:bg-slate-50">
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-2">
            <UserCircle2 className="h-8 w-8 text-blue-600" />
          </div>

          <div>
            <p className="font-semibold">{teacher.name}</p>

            <p className="text-xs text-slate-500">
              ID #{teacher.id}
            </p>
          </div>
        </div>
      </td>

      <td>{teacher.department}</td>

      <td>{teacher.email}</td>

      <td>{teacher.phone}</td>

      <td>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            teacher.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {teacher.status}
        </span>
      </td>

      <td>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => onEdit(teacher)}
            className="rounded-lg p-2 hover:bg-blue-100"
          >
            <Edit2 className="h-4 w-4 text-blue-600" />
          </button>

          <button
            onClick={() => onDelete(teacher)}
            className="rounded-lg p-2 hover:bg-red-100"
          >
            <Trash2 className="h-4 w-4 text-red-600" />
          </button>
        </div>
      </td>
    </tr>
  );
}