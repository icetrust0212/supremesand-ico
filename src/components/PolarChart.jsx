import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Doughnut } from 'react-chartjs-2';

  const PolarChart = () => {
    ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Liquidity Pool', 'Development', 'Partnerships', 'Presale', 'Marketing'],
        datasets: [
          {
            label: '# of Votes',
            data: [30, 10, 10, 30, 20],
            backgroundColor: [
              '#172E5C',
              '#00D6FF',
              'rgba(62, 192, 97)',
              'rgba(22, 22, 255)',
              'yellow',
            ],
            borderWidth: 1,
          },
        ],
      };

    const option = {
        plugins: {
            legend: false
        }
    }
      
    return (
        <Doughnut options={option} data={data} />
    );
}

export default PolarChart;
