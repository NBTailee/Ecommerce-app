import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    )
    no-repeat center;
  position: relative;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  border-radius: 5px;
  height: 55%;
  background-color: white;
  box-shadow: 10px 10px 5px 0px rgba(227, 214, 214, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(227, 214, 214, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(227, 214, 214, 0.75);
  ${mobile({ width: "85%", height: "60%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  padding: 15px 0;
`;
const SubTitle = styled.a`
  font-weight: 300;
  font-size: 15px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: blue;
  }
`;
const Form = styled.div`
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
  width: 100%;
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
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    transform: scale(1.05);
    background-color: black;
    color: white;
  }
`;
const ErrorAlert = styled.h2`
  color: crimson;
  font-size: 17px;
  margin-top: 10px;
`;
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, success } = useSelector((state) => state.user);
  let navigate = useNavigate();
  useEffect(() => {
    if (success) {
      return navigate("/");
    }
  }, [success]);
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
          src="https://i.pinimg.com/originals/de/84/78/de847819dc8c0dcfea42e1f14faa5775.gif"
        />
        <Title>LOGIN</Title>
        <Form>
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            minLength="8"
            name="username"
            type="text"
            placeholder="username"
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            minLength="8"
            name="password"
            type="password"
            placeholder="password"
          />
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            minLength="8"
            name="email"
            type="email"
            placeholder="email"
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              if ((username, email, password !== "")) {
                login(dispatch, {
                  username,
                  password,
                  email,
                });
              }
            }}
            disabled={isFetching}
          >
            Login
          </Button>
        </Form>
        {error && (
          <ErrorAlert>Wrong credentials please try again !!!</ErrorAlert>
        )}
        <div style={{ display: "flex", marginTop: "20px" }}>
          <SubTitle>Forget password</SubTitle>
          <SubTitle href="/register" style={{ marginLeft: "20px" }}>
            Create new account
          </SubTitle>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Login;
