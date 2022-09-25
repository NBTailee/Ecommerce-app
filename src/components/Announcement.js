import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  ${mobile({ fontSize: "13px" })}
`;

function Announcement() {
  return (
    <Container>
      Hyper discount!! buy 2 items pay 2 items only available this week
    </Container>
  );
}

export default Announcement;
