import React, { useState } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";
import { Paragraph } from "../App";

const SpendingContainer = styled.div`
  background-color: var(--very-pale-orange);
  border-radius: var(--container-border-radius);
  padding: 3.2rem 4rem 4rem;
  @media (max-width: 50em) {
    padding: 2rem 2.4rem 2.4rem;
  }
`;

const TotalMonthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3.2rem;
  @media (max-width: 50em) {
    margin-top: 2.4rem;
  }
`;

const HorizontalLine = styled.hr`
  border: 0.1rem solid var(--cream);
  width: 100%;
`;

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
    <SpendingContainer>
      <h1 className="header-m">Spending - Last 7 days</h1>
      <div className="chart">
        <canvas id="myChart" width="400" height="200"></canvas>
      </div>
      mon tue wed thu fri sat sun
      <HorizontalLine />
      <TotalMonthContainer>
        <div className="total-month-sum-container">
          <Paragraph>Total this month</Paragraph>
          <Paragraph className="header-l">$478.33</Paragraph>
        </div>
        <div className="change-container">
          <p className="total-month-percent-change">+2.4%</p>
          <p className="total-month-change-description">from last month</p>
        </div>
      </TotalMonthContainer>
    </SpendingContainer>
  );
}
