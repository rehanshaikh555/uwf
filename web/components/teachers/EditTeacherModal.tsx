"use client";

import * as Dialog from "@radix-ui/react-dialog";
import TeacherForm from "./TeacherForm";
import { Teacher } from "@/types/teacher";

interface Props {
  teacher: Teacher | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (teacher: Teacher) => void;
}

export default function EditTeacherModal({
  teacher,
  open,
  onOpenChange,
  onSave,
}: Props) {
  if (!teacher) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-xl">
          <Dialog.Title className="mb-6 text-2xl font-bold">
            Edit Teacher
          </Dialog.Title>

          <TeacherForm
            initialData={teacher}
            onSubmit={(data) => {
              onSave({
                ...teacher,
                ...data,
              });
            }}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}