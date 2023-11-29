import ScatterPlotChart from "./_components/scatterplot-chart";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import LineChart from "./_components/line-chart";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <ScatterPlotChart />
      {/* <LineChart/> */}
    </main>
  );
}
