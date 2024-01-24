import { getLinechartData } from "~/server/line-chart";
import LineChart from "../_components/LineChart";

export default async function Home() {
  const data = await getLinechartData();

  return (
    <main className="mx-auto flex min-h-screen w-[90%] flex-col items-center justify-center">
      <LineChart data={data} />
    </main>
  );
}
