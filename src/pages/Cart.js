import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #f6f9fe;
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "0 10px", overflow: "hidden" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 40px;
  ${mobile({ display: "none" })}
`;
const TopButton = styled.button`
  outline: none;
  border: none;
  padding: 15px 30px;
  border: 1px solid black;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 15px;
  font-weight: 600;
  box-shadow: 10px 10px 5px -2px rgba(209, 199, 199, 0.75);
  -webkit-box-shadow: 10px 10px 5px -2px rgba(209, 199, 199, 0.75);
  -moz-box-shadow: 10px 10px 5px -2px rgba(209, 199, 199, 0.75);
  cursor: pointer;
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 12px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    marginTop: "50px",
    height: "auto",
  })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100vw", overflow: "hidden" })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Img = styled.img`
  width: 200px;
  object-fit: cover;
  ${mobile({ width: "140px" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ padding: "10px" })}
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "1px", fontSize: "20px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ fontSize: "25px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
  ${mobile({ padding: "10px", marginTop: "40px" })}
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  padding: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    border: 1px solid black;
    background-color: transparent;
    color: black;
    transform: scale(1.05);
    ${mobile({ transform: "scale(1.01)" })}
  }
`;
function Cart() {
  const cart = useSelector((state) => state.cart);
  let totalPrice = 0;
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton bg="transparent" color="black">
            KEEP SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>Shopping Cart({cart.quantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton bg="black" color="white">
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products?.map((item) => {
              totalPrice += item.price * item.amount;
              return (
                <div>
                  <Product>
                    <ProductDetails>
                      <Img src={item.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {item.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {item._id}
                        </ProductId>
                        <ProductColor color={item.color[0]} />
                        <ProductSize>
                          <b>Size:</b> {item.size[0]}
                        </ProductSize>
                      </Details>
                    </ProductDetails>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add />
                        <ProductAmount>{item.amount}</ProductAmount>
                        <Remove />
                      </ProductAmountContainer>
                      <ProductPrice>
                        $ {Math.floor(item.price * item.amount)}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </div>
              );
            })}
            {/* <Product>
              <ProductDetails>
                <Img src="https://i.pinimg.com/564x/3b/40/ff/3b40ffbc087f856177a337de96a667a3.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> ROSES X.X.V TEE
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>2201GG05LDT
                  </ProductId>
                  <ProductColor color="lightgray" />
                  <ProductSize>
                    <b>Size:</b>37.5
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>99</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 19.99</ProductPrice>
              </PriceDetail>
            </Product> */}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {Math.floor(cart.total)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                $ {Math.floor(cart.total - 5.9, 2)}
              </SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
