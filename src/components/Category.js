import { categoryData } from "../data";
import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  max-height: 400vh;
  max-width: 100vw;
  position: relative;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
    width: "100vw",
    overflow: "hidden",
  })}
`;

function Category() {
  return (
    <Container>
      {categoryData.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Category;
