"use client";
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import type { BoatStatus } from "~/types/boat-status";
import getLineChartConfig from "../../config/line-chart-config";

interface LinechartProps {
  data: BoatStatus[];
}

const LineChart = (props: LinechartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let myChart: Chart | null = null;
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        myChart = new Chart(ctx, getLineChartConfig(props.data));
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
