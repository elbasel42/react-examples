"use client";
import { useActionState, startTransition } from "react";
import { action } from "../action";

export default function Home() {
  const [state, formAction, isPending] = useActionState(action, 0);

  const handleClick = async () => {
    const formData = new FormData();
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <main className="text-2xl p-4 flex min-h-screen items-center justify-center flex-col gap-4">
      <h1>With UseTransition Page</h1>
      <p>State: {state}</p>
      <p>isPending: {isPending ? "true" : "false"}</p>
      <button
        onClick={handleClick}
        className="border border-white rounded-md text-xl p-2"
        type="submit"
      >
        Increment
      </button>
    </main>
  );
}
