"use client";
import { sendQuotes } from "@/actions/sendQuotes";
import React, { useEffect } from "react";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
const initialState = {
  message: "",
  status: 0,
};
export default function FormComponent() {
  const [state, formAction] = useFormState(sendQuotes, initialState);

  useEffect(() => {
    if (state.status === 404) {
      toast.error(state.message);
    } else if (state.status === 200) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <label>Enter email</label>
      <input
        type="email"
        className="w-full h-10 p-2 border border-black outline-none rounded-md"
        placeholder="Type your email.."
        name="email"
      />
      <SubmitButton />
    </form>
  );
}
