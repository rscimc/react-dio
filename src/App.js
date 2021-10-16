import styled from "styled-components";
import narutoImg from "./images/naruto.png";
import Quotes from "./components/Quotes";

function App() {
  return (
    <>
      <Content>
        <Quotes quote={"ok"} speaker={"- escritor"} />
        <NarutoImg src={narutoImg} />
      </Content>
    </>
  );
}

export default App;

const Content = styled.div`
  height: 100vh;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vh;
  align-self: flex-end;
`;
