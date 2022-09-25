import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import styled from "styled-components";
import { useState } from "react";

const Header = styled.h1`
  color: black;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 150px;
    background-color: black;
    bottom: -10px;
  }
`;
const Container = styled.div`
  max-width: 100vw;
  height: 25vh;
  display: flex;
  align-items: flex-start;
  margin-top: 100px;
  justify-content: space-between;
`;
const FilterProducts = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 320px;
  ${mobile({ width: "150px", fontSize: "15px" })}
`;
const Select = styled.select`
  height: 100%;
  padding: 10px 20px;
  font-size: 17px;
  ${mobile({ padding: "5px 10px" })}
`;
const Option = styled.option`
  height: 100%;
`;
const SortProducts = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  margin-right: 30px;
  ${mobile({ marginRight: "0", width: "150px" })}
`;
const Title = styled.h3`
  font-weight: 300;
  ${mobile({ display: "none" })}
`;
function ProductList() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  // console.log(filters);
  return (
    <div>
      <Navbar />
      <Announcement />
      <Header>PRODUCTS LIST</Header>
      <Container>
        <FilterProducts style={{ marginLeft: "30px" }}>
          <Title>FILTERS:</Title>
          <Select defaultValue={"Color"} name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>White</Option>
            <Option>Gray</Option>
            <Option>Black</Option>
            <Option>Purple</Option>
            <Option>Green</Option>
            {/* <Option>None</Option> */}
          </Select>
          <Select defaultValue={"Size"} name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            {/* <Option>None</Option> */}
          </Select>
        </FilterProducts>
        <SortProducts>
          <Title>SORT:</Title>
          <Select
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <Option value="Newest">Newest</Option>
            <Option value="Oldest">Oldest</Option>
            <Option value="Asc">Asc</Option>
          </Select>
        </SortProducts>
      </Container>
      <Products filters={filters} sort={sort} />
      <Feedback />
      <Footer />
    </div>
  );
}

export default ProductList;
