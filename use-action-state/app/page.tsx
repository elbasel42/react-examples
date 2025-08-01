"use client";
import { useActionState } from "react";
import { action } from "./action";

export default function Home() {
  const [state, formAction, isPending] = useActionState(action, 0);

  return (
    <main className="p-4 flex min-h-screen items-center justify-center flex-col gap-4">
      <h1>Homepage</h1>
      <p>State: {state}</p>
      <p>isPending: {isPending ? "true" : "false"}</p>
      <form action={formAction}>
        <button
          className="border border-white rounded-md text-xl p-2"
          type="submit"
        >
          Increment
        </button>
      </form>
    </main>
  );
}
