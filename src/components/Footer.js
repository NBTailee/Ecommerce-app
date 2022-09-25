import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40vh;
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${mobile({ height: "42vh" })}
  overflow:hidden;
  /* border-top: 0.2px solid black; */
`;
const Item = styled.div`
  margin-top: 80px;
  margin-left: 5px;
  ${mobile({ marginBottom: "50px", marginLeft: "8px" })}
`;
const Itemr = styled.div`
  margin-top: 80px;
  margin-left: 10px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "18px" })}
`;
const Logo = styled.h3`
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "30px" })}
`;
const SubTitle = styled.h4`
  font-weight: 300;
  font-size: 18px;
  line-height: 2;
  margin-bottom: 10px;
  ${mobile({ fontSize: "13px", marginBottom: "3px" })}
`;
const SocialBtnGroup = styled.div`
  margin-top: 30px;
  ${mobile({ marginTop: "10px" })}
`;
// const A = styled.a``;

function Footer() {
  return (
    <Container>
      <Item style={{ flex: 2.3, paddingRight: "10px" }}>
        <Logo>MENSWEAR.</Logo>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus
          eos? Illum nam tempore nihil repellendus deserunt nulla officiis atque
          sequi.
        </SubTitle>
        <SocialBtnGroup>
          <a
            style={{ color: "black" }}
            target="_black"
            href="https://www.facebook.com/profile.php?id=100039968679862"
          >
            <Facebook style={{ fontSize: "30px" }} />
          </a>
          <Instagram style={{ fontSize: "30px", marginLeft: "25px" }} />
          <Twitter style={{ fontSize: "30px", marginLeft: "25px" }} />
        </SocialBtnGroup>
      </Item>
      <Item style={{ flex: 1 }}>
        <Title>More Information</Title>
        <SubTitle>Home</SubTitle>
        <SubTitle>Man Fashion</SubTitle>
        <SubTitle>Accessories</SubTitle>
        <SubTitle>Order Tracking</SubTitle>
        <SubTitle>Wishlist</SubTitle>
      </Item>
      <Itemr style={{ flex: 1 }}>
        <Title style={{ height: "30px" }}> </Title>
        <SubTitle>Cart</SubTitle>
        <SubTitle>My Account</SubTitle>
        <SubTitle>Terms</SubTitle>
        <SubTitle>NBTailee</SubTitle>
      </Itemr>
      <Item style={{ flex: 2 }}>
        <Title>Contact Me</Title>
        <SubTitle>69 AduCuTo, South East Dong Nai 220105</SubTitle>
        <SubTitle>+ 0939 6969 6969</SubTitle>
        <SubTitle>taicuto@gmail.com</SubTitle>
        <SubTitle></SubTitle>
      </Item>
    </Container>
  );
}

export default Footer;
