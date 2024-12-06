import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
    const bubbleChartData = {
      datasets: [
        {
          label: 'Sales vs Expenses and Profits',
          data: data.expenses.map((expense, index) => ({
            x: expense,
            y: data.profits[index],
            r: data.sales[index]/10
          })),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };


    const bubbleChartOptions = {
        scales: {
          y: {
            beginAtZero: false
          },
        },
      };

      return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
    };


export default BubbleChart;