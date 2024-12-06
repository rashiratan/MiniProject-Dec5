import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
    const scatterChartData = {
      labels: data.expenses,
      datasets: [
        {
          label: 'Expenses and Profits',
          data: data.profits,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };


    const scatterChartOptions = {
        scales: {
          y: {
            beginAtZero: false,
            ticks: {stepsize: 50}
          },
        },
      };

      return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
    };


export default ScatterChart;