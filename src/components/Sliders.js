import {
  ArrowBackIos,
  ArrowForward,
  ArrowForwardIos,
} from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { slideData } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.4;
  z-index: 99;
`;

const Wrapper = styled.div`
  height: 100%;
  position: absolute;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: 1s ease-in-out;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-top: 20px;
`;

const Img = styled.div`
  height: 80%;
  background-image: url(${(props) => props.img});
  width: 410px;
  /* border-radius: 50%; */
  background-position: center;
  background-size: cover;
  /* object-fit: cover; */
  z-index: 3;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px 0 50px 50px;
  margin-right: 100px;
  border: 2px black solid;
  border-radius: 3px;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  padding-bottom: 55px;
`;
const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 28px;
  padding-bottom: 25px;
`;
const Btn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: transparent;
`;
// const Overlay = styled.div`
//   position: absolute;
//   background-color: ${(props) => props.color};
//   width: 300px;
//   height: 300px;
//   border-radius: 50%;
//   top: ${(props) => props.top};
//   left: ${(props) => props.left};
//   z-index: -1;
// `;
function Sliders() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos style={{ fontSize: "18px" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideData.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Img img={item.img} />
              {/* <Overlay color="#6855a6" top="10px"></Overlay> */}
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <SubTitle>{item.subtitle}</SubTitle>
              <Btn>
                Shop Now{" "}
                <ArrowForward style={{ fontSize: "16px", marginLeft: "5px" }} />
              </Btn>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos style={{ fontSize: "18px" }} />
      </Arrow>
    </Container>
  );
}

export default Sliders;
