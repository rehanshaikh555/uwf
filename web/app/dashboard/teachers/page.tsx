"use client";

import { useState } from "react";

import {
  TeacherToolbar,
  TeacherTable,
  AddTeacherModal,
  EditTeacherModal,
  DeleteTeacherModal,
} from "@/components/teachers";

import { Teacher } from "@/types/teacher";

const initialTeachers: Teacher[] = [
  {
    id: 1,
    name: "John Doe",
    department: "Computer Science",
    email: "john@example.com",
    phone: "9876543210",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Smith",
    department: "Mathematics",
    email: "sarah@example.com",
    phone: "9988776655",
    status: "Active",
  },
];

export default function TeachersPage() {
  const [teachers, setTeachers] =
    useState<Teacher[]>(initialTeachers);

  const [addOpen, setAddOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedTeacher, setSelectedTeacher] =
    useState<Teacher | null>(null);

  function addTeacher(
    data: Omit<Teacher, "id" | "status">
  ) {
    setTeachers((prev) => [
      {
        id: Date.now(),
        status: "Active",
        ...data,
      },
      ...prev,
    ]);

    setAddOpen(false);
  }

  function handleEdit(teacher: Teacher) {
    setSelectedTeacher(teacher);
    setEditOpen(true);
  }

  function handleDelete(teacher: Teacher) {
    setSelectedTeacher(teacher);
    setDeleteOpen(true);
  }

  function saveTeacher(updated: Teacher) {
    setTeachers((prev) =>
      prev.map((teacher) =>
        teacher.id === updated.id
          ? updated
          : teacher
      )
    );

    setEditOpen(false);
  }

  function deleteTeacher() {
    if (!selectedTeacher) return;

    setTeachers((prev) =>
      prev.filter(
        (teacher) =>
          teacher.id !== selectedTeacher.id
      )
    );

    setDeleteOpen(false);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Teachers
        </h1>

        <p className="mt-2 text-slate-500">
          Manage teachers and faculty members.
        </p>
      </div>

      <TeacherToolbar
        onAdd={() => setAddOpen(true)}
      />

      <TeacherTable
        teachers={teachers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddTeacherModal
        open={addOpen}
        onOpenChange={setAddOpen}
        onSave={addTeacher}
      />

      <EditTeacherModal
        teacher={selectedTeacher}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSave={saveTeacher}
      />

      <DeleteTeacherModal
        teacher={selectedTeacher}
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onDelete={deleteTeacher}
      />
    </div>
  );
}