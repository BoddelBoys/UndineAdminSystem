import ScatterPlotChart from "../_components/scatterplot-chart";

import { getScatterplotData } from "~/server/scatterplot";

export default async function Home() {
  const data = await getScatterplotData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <ScatterPlotChart data={data} />
    </main>
  );
}
