'use client'
import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import type { KwhUsage } from "~/interfaces/kwh-usage";
import getBarChartConfig from "../../config/bar-chart-config"


const BarChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null); 
    const [data, setData] = useState<KwhUsage>({sailedKwHUsed: 0, hydrogeneratedKwH: 0, chargedKwH: 0});
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://localhost:7054/totalKwh');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json() as KwhUsage
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        
        fetchData();
    }, []);  
    
    useEffect(() => {
        if (chartRef.current && data) {
            const ctx = chartRef.current.getContext("2d");
            
            if (myChart.current) {
                myChart.current.destroy();
            }
            
            if (ctx) {
                const chartConfig = getBarChartConfig(data);
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
export default BarChart;