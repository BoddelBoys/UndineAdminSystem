// LineChart.tsx
"use client";
import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import type { BoatStatus } from "~/interfaces/boat-status";
import getLineChartConfig from "../../config/line-chart-config"


const LineChart: React.FC = () =>  {
  const chartRef = useRef<HTMLCanvasElement>(null); 
  const [data, setData] = useState<BoatStatus[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7054/1/status');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json() as BoatStatus[]
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);      
    
  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      const ctx = chartRef.current.getContext("2d");
      
      if (myChart.current) {
        myChart.current.destroy();
      }
      
      if (ctx) {
        const chartConfig = getLineChartConfig(data);
        myChart.current = new Chart(ctx, chartConfig);
      }
    }
    
    return () => {
      if (myChart.current) {
        myChart.current.destroy();
      }
    };
  }, [data]);
    
  const myChart = useRef<Chart | null>(null);

  return (
    <div>
        <canvas ref={chartRef} />
      </div>
    )
}
export default LineChart;