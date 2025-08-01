"use client";

import { useState, useTransition } from "react";
import { action } from "../action";

const useTransitionPage = () => {
  const [num, setNum] = useState(0);
  const [submittedString, setSubmittedString] = useState("");
  const [isPending, startTransition] = useTransition();

  const formAction = (formData: FormData) => {
    console.log("Starting Transition");
    const submittedString =
      formData.get("string")?.toString() ?? "No string submitted";
    setSubmittedString(submittedString);

    startTransition(async () => {
      const result = await action(num);
      setNum(result);
    });

    // setLoading(false);
    console.log("Transition Ended");
  };

  return (
    <main className="flex items-center justify-center flex-col min-h-screen gap-2 text-2xl">
      <h1>Use Transition Page</h1>
      <form
        action={formAction}
        className="flex gap-4 flex-col items-center justify-center"
      >
        <input
          className="border border-white rounded-md p-2"
          type="text"
          name="string"
          id="string"
        />
        <button className="border border-white rounded-md p-2" type="submit">
          Submit
        </button>
      </form>
      <div>
        <p>Action Called Num Times: {num}</p>
        <p>Submitted String: {submittedString}</p>
        <p>isPending: {isPending ? "true" : "false"}</p>
      </div>
    </main>
  );
};

export default useTransitionPage;
