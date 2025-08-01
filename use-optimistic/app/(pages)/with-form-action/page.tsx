import { db } from "@/app/db";
import { ChatForm } from "./components/ChatForm";

const WithFormActionPage = async () => {
  const messages = (await db.get<string[]>("messages")) ?? [];

  return (
    <main>
      <h1>With Form Action Page</h1>
      <ChatForm messages={messages} />
    </main>
  );
};
export default WithFormActionPage;
