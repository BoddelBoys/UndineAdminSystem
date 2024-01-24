"use client";
import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import type { KwhUsage } from "~/types/kwh-usage";
import getBarChartConfig from "../../config/bar-chart-config";

interface BarchartProps {
  data: KwhUsage;
}

const BarChart = (props: BarchartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let myChart: Chart | null = null;
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        myChart = new Chart(ctx, getBarChartConfig(props.data));
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

export default BarChart;
