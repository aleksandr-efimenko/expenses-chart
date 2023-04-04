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
`;

export const Paragraph = styled.p`
  font-size: var(--fs-paragraph);
  font-weight: var(--fw-paragraph);
  line-height: var(--lh-paragraph);
  color: var(--dark-brown);
`;

export const ParagraphM = styled(Paragraph)`
  font-size: var(--fs-paragraph-m);
  font-weight: var(--fw-paragraph-m);
  line-height: var(--lh-paragraph-m);
`;

export const ParagraphL = styled(Paragraph)`
  font-size: var(--fs-paragraph-l);
  font-weight: var(--fw-paragraph-l);
  line-height: var(--lh-paragraph-l);
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
