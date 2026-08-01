"use client";

import * as Dialog from "@radix-ui/react-dialog";
import TeacherForm from "./TeacherForm";
import { Teacher } from "@/types/teacher";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (teacher: Omit<Teacher, "id" | "status">) => void;
}

export default function AddTeacherModal({
  open,
  onOpenChange,
  onSave,
}: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-xl">
          <Dialog.Title className="mb-6 text-2xl font-bold">
            Add Teacher
          </Dialog.Title>

          <TeacherForm
            onSubmit={(data) => {
              onSave(data);
            }}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}