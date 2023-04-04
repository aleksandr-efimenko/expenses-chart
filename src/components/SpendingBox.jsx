import React, {useState} from "react";
import Chart from "chart.js/auto";


export default function SpendingBox() {
  const [chart, setChart] = useState(null);

  // const data = fetch("../assets/data.json")
  // .catch((error) => {
  //   console.error("Error:", error);
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     return data;
  //   });

  // const labels = data.map((item) => item.date);
  // const values = data.map((item) => item.value);

  // const config = {
  //   type: "line",
  //   data: {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "My First Dataset",
  //         data: values,
  //         fill: false,
  //         borderColor: "rgb(75, 192, 192)",
  //         tension: 0.1,
  //       },
  //     ],
  //   },
  //   options: {},
  // };

  // if (!chart) {
  //   const ctx = document.getElementById("myChart");
  //   const newChart = new Chart(ctx, config);
  //   setChart(newChart);
  // }
  return (
    <div>
      <h1 className="spending-header">Spending - Last 7 days</h1>
      <div className="chart">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
      mon tue wed thu fri sat sun
      <hr />
      <div className="total-month-container">
        <div className="total-month-sum-container">
          <p className="total-month-title">Total this month</p>
          <p className="total-month-sum">$478.33</p>
        </div>
        <div className="change-container">
          <p className="total-month-percent-change">+2.4%</p>
          <p className="total-month-change-description">from last month</p>
        </div>
      </div>
    </div>
  );
}
