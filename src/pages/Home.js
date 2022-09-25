import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Sliders from "../components/Sliders";
import Category from "../components/Category";
import Products from "../components/Products";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect } from "react";
import { userRequest } from "../requestMethod";
import { useSelector } from "react-redux";
import axios from "axios";

const Header = styled.h1`
  color: black;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  ${mobile({ fontSize: "22px" })}
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 150px;
    background-color: black;
    bottom: -10px;
  }
`;
function Home() {
  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const currentUser = user && JSON.parse(user).currentUser;
    const TOKEN = currentUser?.accessToken;
    // console.log(`Bearer ${TOKEN}`);
    // await userRequest.get("/api/products");
    await axios.get("http://localhost:5000/api/products", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });
  }, []);
  return (
    <div>
      <Announcement />
      <Navbar />
      <Sliders />
      <Header>OUTFIT CATEGORIES</Header>
      <Category />
      <Header>TRENDING PRODUCTS</Header>
      <Products />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Home;
