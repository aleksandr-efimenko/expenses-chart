import React from "react";
import styled from "styled-components";

const BalanceContainer = styled.div`
  background-color: var(--soft-red);
  color: var(--very-pale-orange);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--container-border-radius);
  padding: 2.7rem 3.9rem 2.5rem 3.2rem;
  width: 100%;

  p {
    color: var(--very-pale-orange);
  }
  @media (max-width: 50em) {
    padding: 2rem 2.4rem 2.2rem;
  }
`;

const LogoContainer = styled.div`
  background: url("./images/logo.svg") no-repeat center;
  min-height: 4.8rem;
  min-width: 7.2rem;
`;

const BalanceDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;


export default function BalanceBox() {
  return (
    <BalanceContainer>
      <BalanceDescriptionContainer>
        <p> My balance</p>
        <p className="header-m">$921.48</p>
      </BalanceDescriptionContainer>
      <LogoContainer />
    </BalanceContainer>
  );
}
