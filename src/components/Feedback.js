import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  max-width: 100vw;
  height: 40vh;
  background-color: black;
  position: relative;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  ${mobile({ height: "35vh" })}
`;
const Title = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 60px;
  margin-top: 20px;
  ${mobile({ fontSize: "40px" })}
`;
const SubTitle = styled.h3`
  color: gray;
  font-weight: 300;
  font-size: 25px;
  ${mobile({ textAlign: "center", fontSize: "18px" })}
`;
const InputContainer = styled.div`
  display: flex;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 520px;
  height: 40px;
  font-size: 23px;
  margin-bottom: 30px;
  ${mobile({ width: "300px", fontSize: "18px", height: "30px" })}
  &::placeholder {
    margin-left: 30px;
  }
`;
const Btn = styled.button`
  outline: none;
  border: none;
  height: 40px;
  padding: 0 25px;
  background-color: #f4d8b4;
  color: black;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  ${mobile({ height: "30px", padding: "0 20px" })}
  &:hover {
    transform: scale(1.05);
  }
`;

function Feedback() {
  return (
    <Container>
      <Title>Feedback</Title>
      <SubTitle>IT'S OUR PLEASURE TO RECEIVE YOUR FEEDBACK</SubTitle>
      <InputContainer>
        <Input />
        <Btn>
          <Send />
        </Btn>
      </InputContainer>
    </Container>
  );
}

export default Feedback;
