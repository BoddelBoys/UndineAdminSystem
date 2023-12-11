"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { getScatterplotConfig } from "~/config/scatterplot-chart-config";
import { scatterData } from "~/types/plottypes";

interface ScatterPlotChartProps {
  data: scatterData[];
}

const ScatterPlotChart = (props: ScatterPlotChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let myChart: Chart | null = null;
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        myChart = new Chart(ctx, getScatterplotConfig(props.data));
      }
    }

    // Returner en oprydningsfunktion
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);
  return <canvas ref={chartRef} />;
};

export default ScatterPlotChart;
