import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: skyblue;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box bgColor="tomato"></Box>
      <Circle bgColor="skyblue"></Circle>

      <div>
        <Btn>Log in</Btn>
        <Btn as="a" href="/">
          Log in
        </Btn>
      </div>

      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </Father>
  );
}

export default App;
