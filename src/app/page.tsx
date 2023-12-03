
import LineChart from "./_components/line-chart";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

async function getData() {
  const res = await fetch('https://localhost:7054/1/status')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();
  
 
  
  return (
    
    <main className="">
      <LineChart></LineChart>
    </main>
  );
}
