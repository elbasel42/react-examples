"use client";

import { sendMessage } from "@/app/actions";
import { useOptimistic } from "react";

interface ChatFormProps {
  messages: string[];
}
interface State {
  messages: string[];
  sending: boolean;
}
// use optimistic takes the initial state {messages, sending: false, ...}
// the initial state is made avalaible via props and is loaded from the server side.
// the user submits the form which then calls the form action
// the form action in turn calls the second argument ot the use optimistic
// function, which is a function that takes the server-provided state along
// with an optional argument `newMessage`.
// this optional message is then used along with the server-provided state
// to derive a new state  {messages: [...state.message, newMessage], sending: true}
// this derived state persists in memory until (as a result of calling a server action)
// the props change i.e messages in this case and then the initial state re-kicks in
// and the updated messages is then rendered from the server data, if there is a mismatch
// between the server-provided data and the state, the server-provided data is favoured
export const ChatForm = ({ messages }: ChatFormProps) => {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    State,
    string
  >({ messages, sending: false }, (state, newMessage): State => {
    return {
      messages: [...state.messages, newMessage],
      sending: true,
    };
  });

  const formAction = async (formData: FormData) => {
    const newMessage = formData.get("newMessage")?.toString();
    if (!newMessage) return;
    addOptimisticMessage(newMessage);
    await sendMessage(newMessage);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="border border-white p-4 rounded-xl">
        {optimisticMessages.messages.map((msg, index) => {
          return (
            <div key={msg + index} className="border-b border-white pb-2">
              <span>{msg}</span>
            </div>
          );
        })}
        <div>{optimisticMessages.sending ? "sending" : ""}</div>
      </div>
      <div>
        <form action={formAction} className="space-y-4">
          <input
            placeholder="message"
            className="border border-white rounded-xl p-2 text-xl w-full"
            type="text"
            name="newMessage"
            id="newMessage"
          />
          <button className="text-center border border-blue-500 rounded-xl w-full p-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
