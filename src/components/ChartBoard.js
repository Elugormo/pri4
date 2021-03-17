import React, { createRef, useEffect } from "react";
import Chart from "chart.js";
export const ChartBoard = () => {
  const chartRef = createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",

      data: {
        labels: ["Pawn", "Rook", "Knight", "Bishop", "Queen", "King"],
        datasets: [
          {
            label: "Chess pieces",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [13, 4, 3, 4, 2, 2],
          },
        ],
      },

      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  });
  return (
    <div>
      <canvas id="chart" ref={chartRef}></canvas>
    </div>
  );
};
