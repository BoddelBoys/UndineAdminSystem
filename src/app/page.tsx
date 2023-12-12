import LineChart from "./_components/line-chart";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import BarChart from "./_components/bar-chart";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {/* <NavBar></NavBar> */}
      <h1> Front page :) </h1>
      none of this works without api backend running
    </main>
  );
}
