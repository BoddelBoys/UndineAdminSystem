// lineChartConfig.ts
import type { ChartConfiguration, ChartTypeRegistry, Point } from "chart.js";
import { genericOptions } from "../utils/generic-options";
import type { BoatStatus } from "~/types/boat-status";

const determineSegmentColor = (currentType: string | undefined) => {
  if (currentType === "Sailing") return "rgb(192,75,75)";
  if (currentType === "Charging") return "rgb(75,192,75)";
  if (currentType === "Hydrogenerating") return "rgb(75,75,192)";
  return "rgb(0,0,0,0.2)";
};

const getLineChartConfig = (
  allData: BoatStatus[],
): ChartConfiguration<
  keyof ChartTypeRegistry,
  (number | Point | null)[],
  unknown
> => {
  // Transform BoatStatus data to chart data
  const labels = allData.map((t) => t.time);
  const chartData = allData.map((t) => t.value);

  return {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Hydrogenerating",
          data: chartData,
          backgroundColor: "rgb(75,75,192)",
          segment: {
            borderColor: (ctx) => {
              const currentIndex = ctx.p1DataIndex;
              const currentType = allData[currentIndex]?.type;
              return determineSegmentColor(currentType);
            },
          },
          spanGaps: true,
        },
        {
          label: "Sailing",
          data: [],
          backgroundColor: "rgb(192,75,75)",
          hidden: false,
        },
        {
          label: "Charging",
          data: [],
          backgroundColor: "rgb(75,192,75)",
          hidden: false,
        },
      ],
    },
    options: {
      ...genericOptions,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.parsed.y;
              return `Battery level: ${value}%`;
            },
            labelColor: function (context) {
              const currentType = allData[context.dataIndex]?.type;
              const color = determineSegmentColor(currentType);
              return {
                backgroundColor: color,
                borderColor: color,
              };
            },
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100,
        },
      },
    },
  };
};

export default getLineChartConfig;
