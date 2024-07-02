"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-orange-400 text-white w-full rounded-md p-2 mt-4"
      type="submit"
      disabled={pending}
    >
      {pending ? "Processing.." : "Submit"}
    </button>
  );
}
