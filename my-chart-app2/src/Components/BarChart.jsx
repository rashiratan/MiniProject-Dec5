import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };


    const barChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
            max: 300,
            ticks: {stepsize: 100}
          },
        },
      };

      return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
    };


export default BarChart;