import Link from "next/link";

const Home = () => {
  return (
    <main className="p-2 min-h-screen flex flex-col gap-2 items-center justify-center">
      <Link href="/entity-1">Entity One</Link>
      <Link href="/entity-2">Entity Two</Link>
    </main>
  );
};

export default Home;
