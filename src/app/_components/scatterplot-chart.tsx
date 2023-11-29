"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { scatterplotConfig } from "~/config/scatterplot-chart-config";
import type { scatterData } from "~/types/plottypes";
import { MockScatterData } from "~/types/plottypes";

const ScatterPlotChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let myChart: Chart | null = null;
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        myChart = new Chart(ctx, scatterplotConfig);
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
