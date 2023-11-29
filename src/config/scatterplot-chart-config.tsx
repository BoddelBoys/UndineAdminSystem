import { ChartConfiguration, ChartTypeRegistry, Point } from "chart.js/auto";
import { MockScatterData } from "~/types/plottypes";
import type { scatterData } from "~/types/plottypes";

const formatData = (scatterdata: scatterData[]) => {
  const colors = {
    amps: "rgb(255, 99, 132)",
    watts: "rgb(54, 162, 235)",
    volts: "rgb(255, 159, 64)",
    eff: "rgb(75, 192, 192)",
    RPM: "rgb(153, 102, 255)",
  };

  const labels = {
    amps: "Amps",
    watts: "Watts",
    volts: "Volts",
    eff: "Efficiency",
    RPM: "RPM",
  };
  let unit: string = "";
  let datainput: Point[] = [];
  scatterdata.forEach((d) => {
    switch (d.type) {
      case "amps":
        d.value = d.value * (1 / 200);
        unit = "1:200";
        break;
      case "watts":
        d.value = d.value * (1 / 10000);
        unit = "1:10000";
        break;
      case "volts":
        d.value = d.value * (1 / 100);
        unit = "1:100";
        break;
      case "eff":
        d.value = d.value * (1 / 1);
        unit = "1:1";
        break;
      case "RPM":
        d.value = d.value * (1 / 5000);
        unit = "1:5000";
        break;
    }
    datainput.push({ x: d.torque, y: d.value });
  });
  return {
    datasets: [
      {
        label: `${
          labels[scatterdata[0]?.type as keyof typeof labels]
        } - ${unit}`,
        data: datainput,
        backgroundColor: colors[scatterdata[0]?.type as keyof typeof colors],
      },
    ],
  };
};
const mockData = MockScatterData();
const wattData = mockData.filter((d) => d.type === "watts");
const ampData = mockData.filter((d) => d.type === "amps");
const voltData = mockData.filter((d) => d.type === "volts");
const effData = mockData.filter((d) => d.type === "eff");
const RPMData = mockData.filter((d) => d.type === "RPM");

const data = formatData(wattData);
data.datasets = data.datasets
  .concat(formatData(ampData).datasets)
  .concat(formatData(voltData).datasets)
  .concat(formatData(effData).datasets)
  .concat(formatData(RPMData).datasets);

export const scatterplotConfig: ChartConfiguration<
  keyof ChartTypeRegistry,
  (number | Point | null)[],
  unknown
> = {
  type: "scatter",
  data: data,
  options: {
    scales: {
      y: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Værdi",
        },
      },
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "TIME",
        },
      },
    },
  },
};
