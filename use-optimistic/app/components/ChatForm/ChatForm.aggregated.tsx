"use client";

import { useRef } from "react";
import { useOptimistic } from "react";
import { sendMessage } from "@/app/actions";

interface ChatFormProps {
  currentMessages: string[];
}

interface State {
  messages: string[];
  isPending: boolean;
}

// ! Should return the new state
const updateFn = ({ messages }: State, newMessage: string): State => ({
  messages: [...messages, newMessage],
  isPending: true,
});

export const ChatForm = ({ currentMessages }: ChatFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // ! Setup the inital state
  const state = { messages: currentMessages, isPending: false };

  const [{ messages, isPending }, addOptimistic] = useOptimistic(
    state,
    updateFn
  );

  const handleSubmit = async (formData: FormData) => {
    const message = formData.get("message")?.toString();
    if (!message) return;

    addOptimistic(message);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    await sendMessage(message);
  };

  return (
    <>
      <output className="space-y-2 h-[70vh] pb-4 overflow-y-auto px-4">
        {messages.map((msg, i) => (
          <div
            key={`${msg}-${i}`}
            className="flex flex-col border border-blue-500 rounded-xl p-2"
          >
            <div className="p-2">{msg}</div>
            {i === messages.length - 1 && isPending && (
              <div className="text-sm px-2 text-right">Sending...</div>
            )}
          </div>
        ))}
      </output>

      <form action={handleSubmit} className="flex flex-col gap-4 mt-auto">
        <input
          ref={inputRef}
          type="text"
          name="message"
          id="message"
          placeholder="Message"
          className="border border-white rounded-md p-2"
        />

        <button
          type="submit"
          className="bg-blue-500 rounded-lg p-2 flex items-center justify-center gap-2"
        >
          Send
        </button>
      </form>
    </>
  );
};
