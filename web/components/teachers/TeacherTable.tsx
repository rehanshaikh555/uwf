"use client";

import TeacherRow from "./TeacherRow";
import { Teacher } from "@/types/teacher";

interface TeacherTableProps {
  teachers: Teacher[];
  onEdit: (teacher: Teacher) => void;
  onDelete: (teacher: Teacher) => void;
}

export default function TeacherTable({
  teachers,
  onEdit,
  onDelete,
}: TeacherTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">
                Teacher
              </th>

              <th className="px-4 py-4 text-left font-semibold">
                Department
              </th>

              <th className="px-4 py-4 text-left font-semibold">
                Email
              </th>

              <th className="px-4 py-4 text-left font-semibold">
                Phone
              </th>

              <th className="px-4 py-4 text-center font-semibold">
                Status
              </th>

              <th className="px-4 py-4 text-center font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {teachers.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-12 text-center text-slate-500"
                >
                  No teachers found
                </td>
              </tr>
            ) : (
              teachers.map((teacher) => (
                <TeacherRow
                  key={teacher.id}
                  teacher={teacher}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}