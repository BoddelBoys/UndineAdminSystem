import ScatterPlotChart from "../_components/scatterplot-chart";

import { getScatterplotData } from "~/server/scatterplot";

export default async function Home() {
  const data = await getScatterplotData();
  return (
    <main className=" mx-auto flex min-h-screen w-[90%] flex-col items-center justify-center">
      <ScatterPlotChart data={data} />
    </main>
  );
}
