import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    )
    no-repeat center;
  position: relative;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  border-radius: 5px;
  height: 58%;
  background-color: white;
  box-shadow: 10px 10px 5px 0px rgba(227, 214, 214, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(227, 214, 214, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(227, 214, 214, 0.75);
  ${mobile({ width: "80%", height: "65%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  padding: 15px 0;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 18px 45px;
  font-size: 17px;
  ${mobile({ padding: "15px 45px" })}
`;
const Button = styled.button`
  outline: none;
  border: 1px solid black;
  width: 46%;
  padding: 15px 30px;
  margin-top: 40px;
  /* margin-left: 10px; */
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  color: black;
  text-align: center;
  transition: 0.3s all ease-in-out;
  ${mobile({ width: "45%" })}
  &:hover {
    transform: scale(1.05);
    background-color: black;
    color: white;
  }
`;

function Register() {
  const [information, setInformation] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const registerCheck = (value, type) => {
    setInformation((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };
  const check = async () => {
    const { username, email, password, confirmedPassword } = information;
    if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      password === confirmedPassword
    ) {
      await axios.post("http://localhost:5000/auth/register", {
        username: username,
        email: email,
        password: password,
      });
      setInformation({});
    }
  };

  return (
    <Container>
      <Wrapper>
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: "-1",
          }}
          src="https://i.pinimg.com/originals/dd/58/ec/dd58ec129d8f11031933562042d224fe.gif"
        />
        <Title>REGISTER NEW ACCOUNT</Title>

        <Form>
          <Input
            onChange={(e) => {
              registerCheck(e.target.value, "username");
            }}
            minLength="8"
            name="username"
            type="text"
            placeholder="username"
          />
          <Input
            onChange={(e) => {
              registerCheck(e.target.value, "email");
            }}
            minLength="8"
            name="email"
            type="email"
            placeholder="email"
          />
          <Input
            onChange={(e) => {
              registerCheck(e.target.value, "password");
            }}
            minLength="8"
            name="password"
            type="password"
            placeholder="password"
          />
          <Input
            onChange={(e) => {
              registerCheck(e.target.value, "confirmedPassword");
            }}
            minLength="8"
            type="password"
            placeholder="confirm password"
          />
          <Button
            onClick={(e) => {
              check();
              e.preventDefault();
            }}
          >
            Register
          </Button>
          <Link style={{ width: "46%" }} to="/login">
            <Button style={{ marginLeft: "27px", width: "100%" }}>Login</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
//
export default Register;
