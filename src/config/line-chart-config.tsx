// lineChartConfig.ts
import type { ChartConfiguration, ChartTypeRegistry, Point } from "chart.js";
import { genericOptions } from "../utils/generic-options";

interface data {
  Time: string;
  Type: "Sailing" | "Hydrogenerating" | "Charging";
  Value: number;
}

const allData: data[] = [
  {
    Time: "2023-11-28",
    Type: "Sailing",
    Value: 51,
  },
  {
    Time: "2023-11-29",
    Type: "Sailing",
    Value: 50,
  },
  {
    Time: "2023-11-30",
    Type: "Sailing",
    Value: 49,
  },
  {
    Time: "2023-12-01",
    Type: "Sailing",
    Value: 48,
  },
  {
    Time: "2023-11-02",
    Type: "Hydrogenerating",
    Value: 50,
  },
  {
    Time: "2023-11-03",
    Type: "Hydrogenerating",
    Value: 51,
  },
  {
    Time: "2023-11-04",
    Type: "Charging",
    Value: 60,
  },
  {
    Time: "2023-11-05",
    Type: "Charging",
    Value: 70,
  },
];

const labels = allData.map((d) => d.Time);
const dataPoints = allData.map((d) => d.Value);

const determineSegmentColor = (currentType: string | undefined) => {
  if (currentType === "Sailing") return "rgb(192,75,75)";
  if (currentType === "Charging") return "rgb(75,192,75)";
  if (currentType === "Hydrogenerating") return "rgb(75,75,192)";
  return "rgb(0,0,0,0.2)"; // Standardfarve
};

export const lineChartConfig: ChartConfiguration<
  keyof ChartTypeRegistry,
  (number | Point | null)[],
  unknown
> = {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Battery level in %",
        data: dataPoints,
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
