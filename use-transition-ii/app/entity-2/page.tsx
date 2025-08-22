"use client";

import { ChangeEvent, useState, useTransition } from "react";

const LIST_SIZE = 20_000;

const EntityOnePage = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, starTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    starTransition(() => {
      const l = [];
      setInput(e.target.value);
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <main className="p-2">
      <input
        className="border border-black w-full p-2 rounded-full"
        type="text"
        value={input}
        onChange={handleChange}
      />
      {isPending ? "Loading...":list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </main>
  );
};

export default EntityOnePage;
