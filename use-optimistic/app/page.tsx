// import { ChatForm } from "./ChatForm";
import { ChatFormAggregated } from "@/app/components";
import { db } from "./db";

const HomePage = async () => {
  const currentMessages = (await db.get<string[]>("messages")) ?? [];

  return (
    <main className="flex p-4 flex-col text-2xl">
      <ChatFormAggregated currentMessages={currentMessages} />
    </main>
  );
};
export default HomePage;
