"use client";
import { Toaster, toast } from "sonner";

import { useFormStatus } from "react-dom";
import { action } from "./action";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="p-2">
      <Toaster richColors duration={3000} position="bottom-center" />
      <form action={action} className="space-y-4">
        <FormStatus />
        <input
          className={inputClassName}
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

const FormStatus = () => {
  const { pending, data, method, action } = useFormStatus();
  const formEntries = data?.entries();
  const formDataObject = formEntries ? Object.fromEntries(formEntries) : null;

  useEffect(() => {
    if (pending)
      toast.loading("Loading...", {
        id: "form-loading",
      });
    else toast.dismiss("form-loading");
  }, [pending]);

  return (
    <div>
      <p>Pending {pending ? "true" : "false"}</p>
      <p>Method: {method ?? "null"}</p>
      <p className="max-w-full flex flex-wrap">
        Data: {JSON.stringify(formDataObject)}
      </p>
      <p>Action: {action?.toString() ?? "null"}</p>
    </div>
  );
};

const inputClassName = "border w-full border-white rounded-md p-2 text-2xl";
