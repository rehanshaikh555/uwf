"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Teacher } from "@/types/teacher";

interface Props {
  teacher: Teacher | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
}

export default function DeleteTeacherModal({
  teacher,
  open,
  onOpenChange,
  onDelete,
}: Props) {
  if (!teacher) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 shadow-xl">
          <Dialog.Title className="text-xl font-bold">
            Delete Teacher
          </Dialog.Title>

          <p className="mt-4 text-slate-600">
            Are you sure you want to delete{" "}
            <strong>{teacher.name}</strong>?
          </p>

          <div className="mt-8 flex justify-end gap-3">
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-xl border px-5 py-2"
            >
              Cancel
            </button>

            <button
              onClick={onDelete}
              className="rounded-xl bg-red-600 px-5 py-2 text-white"
            >
              Delete
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}