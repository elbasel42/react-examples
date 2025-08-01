"use client";

import { useState, useActionState, useEffect } from "react";
import { action } from "../action";

const useTransitionPage = () => {
  const useActionStateAction = async (
    prevState: number,
    formData: FormData
  ) => {
    const submittedString =
      formData.get("string")?.toString() ?? "No string submitted";
    setSubmittedString(submittedString);
    const result = action(num);
    return result;
  };

  const [num, setNum] = useState(0);
  const [submittedString, setSubmittedString] = useState("null");
  const [state, formAction, isPending] = useActionState(
    useActionStateAction,
    0
  );

  useEffect(() => {
    setNum(state);
  }, [state]);

  return (
    <main className="flex items-center justify-center flex-col min-h-screen gap-2 text-2xl">
      <h1>Use ActionState Page</h1>
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
        <p>State: {state}</p>
        <p>Submitted String: {submittedString}</p>
        <p>isPending: {isPending ? "true" : "false"}</p>
      </div>
    </main>
  );
};

export default useTransitionPage;
