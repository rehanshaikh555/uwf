"use client";

import { useState } from "react";
import { Teacher } from "@/types/teacher";

interface TeacherFormProps {
  initialData?: Teacher;
  onSubmit: (teacher: Omit<Teacher, "id" | "status">) => void;
}

export default function TeacherForm({
  initialData,
  onSubmit,
}: TeacherFormProps) {
  const [name, setName] = useState(initialData?.name ?? "");
  const [department, setDepartment] = useState(initialData?.department ?? "");
  const [email, setEmail] = useState(initialData?.email ?? "");
  const [phone, setPhone] = useState(initialData?.phone ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onSubmit({
      name,
      department,
      email,
      phone,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Teacher Name
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border p-3"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Department
        </label>

        <input
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
          className="w-full rounded-xl border p-3"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-xl border p-3"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Phone
        </label>

        <input
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          className="w-full rounded-xl border p-3"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Save Teacher
      </button>
    </form>
  );
}