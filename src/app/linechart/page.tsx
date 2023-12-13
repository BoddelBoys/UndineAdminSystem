import { getLinechartData } from "~/server/linechart";
import LineChart from "../_components/line-chart";

export default async function Home() {
  const data = await getLinechartData();

  return (
    <main className="mx-auto flex min-h-screen w-[90%] flex-col items-center justify-center">
      <LineChart data={data} />
    </main>
  );
}
