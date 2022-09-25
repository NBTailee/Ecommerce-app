import styled from "styled-components";
import { mobile } from "../responsive";
import {
  Search,
  LocalGroceryStoreOutlined,
  ArrowDropDown,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// components
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const A = styled.div`
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 50%;
  ${mobile({ width: "70px" })}
`;
const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  padding: 0;
  margin: 0;
  text-align: center;
  ${mobile({ fontSize: "21px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  ${mobile({ flex: 1.5, justifyContent: "center" })}
`;
const FlexItem = styled.div`
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Icon = styled.div`
  ${mobile({ fontSize: "12px" })}
`;
function Navbar() {
  const data = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Language>EN</Language>
            <A>
              <ArrowDropDown />
            </A>
          </div>
          <SearchContainer>
            <Input placeholder="Search..." />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <Logo>MENWEAR.</Logo>
          </Link>
        </Center>
        <Right>
          <FlexItem>
            <Link
              to="/register"
              style={{ color: "black", textDecoration: "none" }}
            >
              REGISTER
            </Link>
          </FlexItem>
          <FlexItem>
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
            >
              SIGN IN
            </Link>
          </FlexItem>
          <FlexItem>
            <Link to="/cart" style={{ color: "black", textDecoration: "none" }}>
              <Icon>
                <Badge
                  overlap="rectangular"
                  badgeContent={data}
                  color="primary"
                >
                  <LocalGroceryStoreOutlined />
                </Badge>
              </Icon>
            </Link>
          </FlexItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
