import LineChart from "./_components/line-chart";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import BarChart from "./_components/bar-chart";

export default function Home() {

  return (
    <main className="">
      {/* <LineChart></LineChart>Test: */}
      <BarChart></BarChart> 
    </main>
  );
}
