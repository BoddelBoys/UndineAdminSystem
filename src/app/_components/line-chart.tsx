// LineChart.tsx
"use client";
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { lineChartConfig } from "../../config/line-chart-config";

const LineChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let myChart: Chart | null = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        myChart = new Chart(ctx, lineChartConfig);
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

export default LineChart;
