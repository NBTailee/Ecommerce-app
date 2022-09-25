import { productsData } from "../data";
import Product from "./Product";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { userRequest } from "../requestMethod";
const Container = styled.div`
  max-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: auto;
  max-height: 600vh;
  position: relative;
  ${mobile({
    flexWrap: "nowrap",
    flexDirection: "column",
    marginBottom: "50px",
  })}
`;

function Products({ filters, sort }) {
  const location = useLocation();
  const cat = location.search.split("=")[1];
  const [filterProduct, setFilterProduct] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(async () => {
    try {
      const data = await userRequest.get(
        cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products"
      );
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [cat]);
  useEffect(() => {
    filters &&
      setFilterProduct(
        product.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [product, cat, filters]);
  useEffect(() => {
    if (sort === "Newest") {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "Oldest") {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => {
          return Number(a.price.split("$")[0]) - Number(b.price.split("$")[0]);
        })
      );
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? filterProduct.map((item) => <Product key={item.id} item={item} />)
        : product
            .slice(0, 8)
            .map((item) => <Product key={item.id} item={item} />)}
    </Container>
  );
}

export default Products;
