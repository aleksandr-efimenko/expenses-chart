import React from "react";
import styled from "styled-components";

export default function BalanceBox() {
  const BalanceContainer = styled.div`
    background-color: var(--soft-red);
    color: var(--very-pale-orange);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--container-border-radius);
    padding: 2.7rem 3.2rem 2.5rem;
    width: 100%;
  `;

  const LogoContainer = styled.div`
    background: url("/public/images/logo.svg") no-repeat center;
    min-height: 4.8rem;
    min-width: 7.2rem;
  `;

  const BalanceDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `;

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
