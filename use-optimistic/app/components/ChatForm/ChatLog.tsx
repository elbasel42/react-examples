interface ChatLogProps {
  messages: string[];
}

export const ChatLog = ({ messages }: ChatLogProps) => (
  <output className="space-y-2">
    {messages.map((msg, i) => (
      <div key={`${msg}-${i}`}>{msg}</div>
    ))}
  </output>
);
