"use client";

import { useOptimistic } from "react";
import { sendMessage } from "@/app/actions";
import { ChatLog } from "./ChatLog";
import { ChatInput } from "./ChatInput";

interface ChatFormProps {
  currentMessages: string[];
}

interface State {
  messages: string[];
  isPending: boolean;
}

// Initial state
const createInitialState = (messages: string[]): State => ({
  messages,
  isPending: false,
});

// Reducer
const optimisticReducer = (prevState: State, newMessage: string): State => ({
  messages: [...prevState.messages, newMessage],
  isPending: true,
});

export const ChatForm = ({ currentMessages }: ChatFormProps) => {
  const [state, updateOptimistic] = useOptimistic<State, string>(
    createInitialState(currentMessages),
    optimisticReducer
  );

  const handleSendMessage = async (message: string) => {
    updateOptimistic(message);
    await sendMessage(message);
  };

  return (
    <>
      <ChatLog messages={state.messages} />
      <ChatInput onSubmit={handleSendMessage} isPending={state.isPending} />
    </>
  );
};
