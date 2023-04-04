import styled from "styled-components";
import "./App.css";
import BalanceBox from "./components/BalanceBox";
import SpendingBox from "./components/SpendingBox";

function App() {
  const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;
  `;

  return (
    <div className="App">
      <ComponentContainer>
        <BalanceBox />

        <SpendingBox />
      </ComponentContainer>
    </div>
  );
}

export default App;
