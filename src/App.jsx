import { useState } from 'react'
import './App.css'
import Chart from 'chart.js/auto';

function App() {

  const [chart, setChart] = useState(null);

  const data = fetch('./assets/data.json')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
    
  const labels = data.map((item) => item.date);
  const values = data.map((item) => item.value);

  const config = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: values,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {}
  };

  if (!chart) {
    const ctx = document.getElementById('myChart');
    const newChart = new Chart(ctx, config);
    setChart(newChart);
  }

  return (

    <div className="App">
      <div className="chart">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>


        My balance
  $921.48

  Spending - Last 7 days

  mon
  tue
  wed
  thu
  fri
  sat
  sun

  Total this month
  $478.33

  +2.4%
  from last month
    </div>
  )
}

export default App
