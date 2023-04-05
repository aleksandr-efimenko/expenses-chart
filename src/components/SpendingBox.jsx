import React, { useState } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";
import { useQuery } from "react-query";

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
  margin-top: 0.1rem;
`;

const HorizontalLine = styled.hr`
  border: 0.1rem solid var(--cream);
  width: 100%;
  margin-block: 3.2rem;
  @media (max-width: 50em) {
    margin-block: 2.4rem;
  }
`;

const ChangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: flex-end;
`;

const fetchFunc = async () => {
  const response = fetch("./public/assets/data.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
  return response;
};

export default function SpendingBox() {
  const [chart, setChart] = useState(null);
  const { data } = useQuery("spending", fetchFunc, {
    staleTime: 1000 * 60 * 60 * 24,
  });

  console.log(data);

  const labels = data.map((item) => item.day);
  const values = data.map((item) => item.amount);

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

  if (!chart) {
    const ctx = document.getElementById("myChart");
    const newChart = new Chart(ctx, config);
    setChart(newChart);
  }

  return (
    <SpendingContainer>
      <h1 className="header-m">Spending - Last 7 days</h1>
      <div className="chart">
        <canvas id="myChart" width="400" height="200"></canvas>
      </div>
      mon tue wed thu fri sat sun
      <HorizontalLine />
      <p className="medium-brown">Total this month</p>
      <TotalMonthContainer>
        <p className="header-l">$478.33</p>
        <ChangeContainer>
          <p className="fw-header">+2.4%</p>
          <p className="medium-brown">from last month</p>
        </ChangeContainer>
      </TotalMonthContainer>
    </SpendingContainer>
  );
}
