// lineChartConfig.ts
import type { ChartConfiguration, ChartTypeRegistry, Point } from "chart.js";
import { genericOptions } from "../utils/generic-options";
import type { BoatStatus } from "~/interfaces/boat-status";


const determineSegmentColor = (currentType: string | undefined) => {
  if (currentType === "Sailing") return "rgb(192,75,75)";
  if (currentType === "Charging") return "rgb(75,192,75)";
  if (currentType === "Hydrogenerating") return "rgb(75,75,192)";
  return "rgb(0,0,0,0.2)"; // Standardfarve
};

const getLineChartConfig = (
  allData: BoatStatus[]
): ChartConfiguration<keyof ChartTypeRegistry, (number | Point | null)[], unknown> => {
  // Transform BoatStatus data to chart data
  const labels = allData.map(t => t.time);
  const chartData = allData.map(t => t.value);

  return {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: chartData,
          borderColor: "rgb(75, 192, 192)",
          segment: {
            borderColor: (ctx) => {
              const currentIndex = ctx.p1DataIndex;
              const currentType = allData[currentIndex]?.Type;
              return determineSegmentColor(currentType);
            },
          },
          spanGaps: true,
        },
      ],
    },
    options: genericOptions,
  };
};

export default getLineChartConfig;