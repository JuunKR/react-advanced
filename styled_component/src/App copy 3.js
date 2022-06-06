import styled, { keyframes } from "styled-components";

const Emoji = styled.span`
  font-size: 40px;
`;

const Wrapper = styled.div`
  display: flex;
`;
const rotationAnimation = keyframes`
  from {
    transform:rotate(0deg);
    border-radius:0px;
  }to{
    transform:rotate(360deg);
    border-radius:100px;
  }
`;

const rotationAnimation2 = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation2} 2s linear infinite;
  ${Emoji} {
    font-size: 40px;
    &:hover {
      font-size: 70px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😊</Emoji>
      </Box>
      <Emoji>💕</Emoji>
    </Wrapper>
  );
}

export default App;
