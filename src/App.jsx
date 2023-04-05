import styled from "styled-components";
import "./App.css";
import BalanceBox from "./components/BalanceBox";
import SpendingBox from "./components/SpendingBox";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  @media (max-width: 50em) {
    gap: 1.6rem;
  }
`;



function App() {
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
