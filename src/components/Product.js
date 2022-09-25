import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const BtnGroup = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100%;
  transition: 0.5s all ease-in-out;
  transform: translateY(20px);
  opacity: 0;
  z-index: 100;
  margin: 0;
  padding: 0;
  ${mobile({ transform: "translateY(40px)", bottom: "0px" })}
`;
const Btn = styled.button`
  outline: none;
  border: none;
  background-color: black;
  color: white;
  padding: 12px 35px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ padding: "10px 35px" })}
  &:hover {
    transform: scale(1.05);
  }
`;
const ImgContainer = styled.div`
  height: 75%;
  width: 100%;
  position: relative;
  overflow: hidden;
  &:hover ${BtnGroup} {
    transform: translateY(0);
    opacity: 1;
  }
  ${mobile({ width: "100%", height: "90%" })}/* border: 1px solid black; */
`;
const Container = styled.div`
  height: 550px;
  width: 320px;
  margin: 20px 0px 10px 10px;
  cursor: pointer;
  position: relative;
  ${mobile({ height: "450px", with: "300px" })}/* border: 1px solid black; */
`;

const Img = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;
  ${mobile({ marginTop: "10px" })};
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  ${mobile({ marginTop: "35px" })}
`;
const Title = styled.h2`
  color: black;
  font-weight: 600;
  font-size: 18px;
`;
const Price = styled.h3`
  color: gray;
  font-weight: 500;
  font-size: 15px;
`;

function Product({ item }) {
  return (
    <Container>
      <ImgContainer>
        <Img src={item.img} />
        <BtnGroup>
          <Link
            style={{ padding: "0", margin: "0", flex: 1 }}
            to={`/products/${item._id}`}
          >
            <Btn>View More</Btn>
          </Link>
          <div style={{ width: "15px" }}></div>
          <Link style={{ padding: "0", margin: "0", flex: 1 }} to="/cart">
            <Btn>Buy Now</Btn>
          </Link>
        </BtnGroup>
      </ImgContainer>
      <Info>
        <Title>{item.title}</Title>
        <Price>{item.price}</Price>
      </Info>
    </Container>
  );
}

export default Product;
