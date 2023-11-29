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
  console.log(data);
}, [data]);
    
  
useEffect(() => {
  if (chartRef.current && data.length > 0) {
    const ctx = chartRef.current.getContext("2d");
    if (ctx) {
      const chartConfig = getLineChartConfig(data);
      const myChart = new Chart(ctx, chartConfig);
      // ...rest of your chart logic...
    }
  }
  // ...rest of your useEffect...
}, [data]);

  
useEffect(() => {
  if (chartRef.current && data.length > 0) {
    const ctx = chartRef.current.getContext("2d");
    if (ctx) {
      // Destroy existing chart instance if it exists
      if (myChart.current) {
        myChart.current.destroy();
      }

      // Create a new chart instance
      myChart.current = new Chart(ctx, getLineChartConfig(data));
    }
  }

  // Cleanup function
  return () => {
    if (myChart.current) {
      myChart.current.destroy();
    }
  };
}, [data]);

// Ref for the chart instance
const myChart = useRef<Chart | null>(null);

return (
  <div>
      <canvas ref={chartRef} />
    </div>
  )
}
export default LineChart;

  
//   useEffect(() => {
//     if (chartRef.current && data.length > 0) {
//       const ctx = chartRef.current.getContext("2d");
//       if (ctx) {
//         if (myChart.current) {
//           myChart.destroy();
//         }
//         const myChart = new Chart(ctx, chartConfig);
//         const chartConfig = getLineChartConfig(data);
      
//       }
//     }
    
//     // Returner en oprydningsfunktion
//     return () => {
      
//       const myChart = useRef<Chart | null>(null);
//     };
//   }, [data]);
  
  // return (
  // <div>
  //     <canvas ref={chartRef} />
  //   </div>
  // )
// };
