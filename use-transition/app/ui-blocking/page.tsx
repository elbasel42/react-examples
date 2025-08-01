"use client";

import { ChangeEvent, useState } from "react";

const LIST_SIZE = 20_000;

const UIBlockingPage = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(inputValue);
    }
    setList(l);
  };

  return (
    <main className="flex items-center justify-center flex-col min-h-screen gap-2 text-2xl">
      <h1>Ui Blocking Page</h1>
      <input
        value={input}
        onChange={handleChange}
        className="border border-white rounded-lg"
        type="text"
        name="string"
        id="string"
      />
      {list.map((elem, index) => {
        return <div key={elem + index}>{elem}</div>;
      })}
    </main>
  );
};

export default UIBlockingPage;
