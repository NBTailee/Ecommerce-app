import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import axios from "axios";

const Container = styled.div``;
const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  background-color: #f6f9fe;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${mobile({ flexDirection: "column", height: "auto" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  width: 50%;
  height: 70%;
  margin-left: 100px;
  ${mobile({ width: "100%", margin: "0", padding: "0" })}
`;
const Img = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
  ${mobile({ padding: "0", marginLeft: "50px" })}
`;
const InfoContainer = styled.div`
  flex: 1.2;
  padding: 0 50px;
  ${mobile({ padding: "0 10px" })}
`;
const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 30px;
  margin-top: -250px;
  font-size: 40px;
  ${mobile({ fontSize: "30px", margin: "0 0 0 20px" })}
`;
const SubTitle = styled.h3`
  font-weight: 300;
  margin-bottom: 30px;
  font-size: 20px;
  width: 600px;
  ${mobile({ fontSize: "16px", margin: "20px 0 0 20px", width: "90%" })}
`;
const Price = styled.div`
  font-weight: 400;
  font-size: 40px;
  margin: 45px 0;
  ${mobile({ fontSize: "35px", margin: "45px 0  45px 20px" })}
`;
const SizeColor = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  font-weight: 500;
  ${mobile({ width: "90%", fontSize: "18px", marginLeft: "10px" })}
`;
const Select = styled.select`
  height: 100%;
  padding: 10px 20px;
  font-size: 17px;
`;
const Option = styled.option`
  height: 100%;
`;
const ColorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`;
const Color = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.2s all ease-in;
  background-color: ${(props) => props.color};
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    border: 5px red solid;
  }
`;
const AddContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  ${mobile({ width: "90%", margin: "50px 0 100px 0", marginLeft: "10px" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
const Button = styled.button`
  outline: none;
  border: none;
  padding: 13px 20px;
  border: 2px solid black;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(1.05);
    background-color: black;
    color: white;
  }
`;

function SingleProduct() {
  const id = useLocation().pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  // const state = useSelector((state) => state.cart.total);
  // console.log(state);
  useEffect(() => {
    const getProduct = async () => {
      const Product = await axios.get(
        `http://localhost:5000/api/products/find/${id}`
      );
      setProduct(Product.data);
    };
    getProduct();
  }, [id]);

  const handleClick = (type) => {
    if (amount >= 1) {
      if (type === "dec" && amount > 1) {
        setAmount(amount - 1);
      } else if (type === "inc" && amount >= 1) {
        setAmount(amount + 1);
      }
    }
  };
  let chosenProduct = product;
  const dispatch = useDispatch();
  const handleAdd = () => {
    const chooseCheck =
      chosenProduct.color.length === 1 && chosenProduct.size.length === 1
        ? true
        : false;
    if (chooseCheck) {
      dispatch(addProduct({ ...product, amount }));
    } else {
      alert(
        "You haven't choose the size and color yet!\n Please choose before adding products"
      );
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <div style={{ flex: 0.1 }}></div>
        <InfoContainer>
          <Title>{product.title}</Title>
          <SubTitle>{product.desc}</SubTitle>
          <Price>{product.price}</Price>
          <SizeColor>
            <ColorContainer>
              <div>Color</div>
              {product.color?.map((color) => {
                return (
                  <Color
                    key={color}
                    color={color}
                    onClick={() => {
                      chosenProduct.color.length = 0;
                      chosenProduct.color.push(color);
                    }}
                  ></Color>
                );
              })}
            </ColorContainer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ marginRight: "10px" }}>SIZE</div>
              <Select
                onChange={(e) => {
                  chosenProduct.size.length = 1;
                  chosenProduct.size[0] = e.target.value;
                }}
              >
                <Option disabled selected>
                  Size
                </Option>
                {product.size?.map((item) => (
                  <Option>{item}</Option>
                ))}
              </Select>
            </div>
          </SizeColor>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("dec")}
              />
              <Amount>{amount}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("inc")}
              />
            </AmountContainer>
            <Button onClick={handleAdd}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Feedback />
      <Footer />
    </Container>
  );
}

export default SingleProduct;
