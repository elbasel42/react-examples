"use client";

import { type FormEvent, useState } from "react";
import { action } from "./action";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);
  const [submittedString, setSubmittedString] = useState("");

  // const formAction = async (formData: FormData) => {
  //   const submittedString =
  //     formData.get("string")?.toString() ?? "No string submitted";
  //   setSubmittedString(submittedString);
  //   // ! This won't be called until the `await action` finishes
  //   setLoading(true);

  //   const result = await action(num);
  //   setNum(result);
  //   setLoading(false);
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmittedString(submittedString);
    setLoading(true);
    const result = await action(num);
    setNum(result);
    setLoading(false);
  };
  return (
    <main className="flex items-center justify-center flex-col min-h-screen gap-2 text-2xl">
      <h1>Homepage</h1>
      <form
        // action={formAction}
        onSubmit={handleSubmit}
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
        <p>Loading: {loading ? "true" : "false"}</p>
        <p>Submitted String: {submittedString}</p>
      </div>
    </main>
  );
};

export default HomePage;
