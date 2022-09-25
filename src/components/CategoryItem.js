import { mobile } from "../responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  /* flex: 1; */
  margin: 10px;
  position: relative;
  height: 80vh;
  ${mobile({ height: "30vh", width: "95%" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  color: white;
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "37px" })}
`;
const Btn = styled.div`
  outline: none;
  border: none;
  padding: 10px 20px;
  color: gray;
  background-color: white;
  font-weight: 500;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  ${mobile({ padding: "10px 18px" })}
  &:hover {
    transform: scale(1.05);
    color: black;
    font-weight: 600;
  }
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Img src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link
          to={`/products?cat=${item.cat}`}
          style={{ textDecoration: "none" }}
        >
          <Btn>SHOW MORE</Btn>
        </Link>
      </Info>
    </Container>
  );
}

export default CategoryItem;
