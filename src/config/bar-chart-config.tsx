import type { ChartConfiguration, ChartTypeRegistry, Point } from "chart.js";
import type { KwhUsage } from "../interfaces/kwh-usage"


const getBarChartConfig = (
    data: KwhUsage
    ): ChartConfiguration<keyof ChartTypeRegistry, (number | Point | null)[]> => { 
    const labels: string[] = []
    Object.keys(data).forEach(element => {
        labels.push(element)
    });
    
    return {
        type: 'bar',
        data: {
            labels: ['Hydrogenerated KwH', 'Sailed KwH Used', 'Charged KwH'], // Labels for each bar
            datasets: [{
                label: 'KwH Usage',
                data: [data.hydrogeneratedKwH, data.sailedKwHUsed, data.chargedKwH], // Data for each category
                backgroundColor: ['rgb(75,75,192)', 'rgba(213, 81, 90, 0.8)', 'rgba(89, 216, 135, 0.8)'], // Separate color for each bar
            }]
        },
        options: {
            indexAxis: 'y',
          // Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
            bar: {
                borderWidth: 2,
            }},
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                    position: 'right',
                },
            title: {
                display: true,
                text: 'KwH expenditure'
            }
            }
        },
    }
};

export default getBarChartConfig;