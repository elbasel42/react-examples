import { Loader } from "lucide-react";
import { useRef } from "react";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  isPending: boolean;
}

export const ChatInput = ({ onSubmit, isPending }: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (formData: FormData) => {
    const message = formData.get("message")?.toString();
    if (!message) return;

    onSubmit(message);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
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
        disabled={isPending}
        className="bg-blue-500 disabled:bg-gray-500 rounded-lg p-2 flex items-center justify-center gap-2"
      >
        Send
        {isPending && <Loader className="animate-spin" />}
      </button>
    </form>
  );
};
