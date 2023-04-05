import React from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";
import { useQuery } from "react-query";
import { Bar } from "react-chartjs-2";

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
  margin-block: 2.4rem 3.2rem;
  @media (max-width: 50em) {
    margin-block: 1.6rem 2.4rem;
  }
`;

const ChangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: flex-end;
`;

const fetchFunc = async () => {
  const response = fetch("./assets/data.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
  return response;
};

const ChartContainer = styled.div`
  width: 100%;
  min-height: 18rem;
  margin-block: 3.2rem 0;
  @media (max-width: 50em) {
    min-height: 15rem;
  }
`;

export default function SpendingBox() {
  const { data, status } = useQuery("spending", fetchFunc);

  const labels = data.map((item) => item.day);
  const values = data.map((item) => item.amount);

  const chartColors = {
    softRed: "hsl(10, 79%, 65%)",
    lighterSoftRed: "hsl(10, 100%, 76%)",
    softBlue: "hsl(186, 34%, 60%)",
    mediumBrown: "hsl(28, 10%, 53%)",
    black: "hsl(0, 0%, 0%)",
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: chartColors.softRed,
        hoverBackgroundColor: chartColors.lighterSoftRed,
        activeBackgroundColor: chartColors.lighterSoftRed,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    labels: {
      display: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: chartColors.mediumBrown,
          padding: 0,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: "index",
        backgroundColor: chartColors.black,
        displayColors: false,
        caretSize: 0,
        position: "nearest",
        xAlign: "center",
        padding: {
          top: 8,
          bottom: 6,
          left: 8,
          right: 8,
        },
        bodyFont: {
          size: 18,
          family: "DM Sans",
          weight: 700,
        },
        callbacks: {
          label: function (context) {
            return "$" + context.parsed.y;
          },
          title: () => "",
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <SpendingContainer>
      <h1 className="header-m">Spending - Last 7 days</h1>
      <ChartContainer>
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>Error fetching data</p>}
        <Bar data={chartData} options={options} />
      </ChartContainer>
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
