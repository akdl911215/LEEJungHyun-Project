import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Betazon } from "webapp/images/index";
import { signinPage } from "webapp/user/reducer/user.reducer";
import { useNavigate } from "react-router";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Checkbox,
  Input,
  ButtonOr,
} from "semantic-ui-react";
import SigninButtonComponent from "webapp/common/component/SigninButtonComponent";
import SignupButtonComponent from "webapp/common/component/SignupButtonComponent";
import axios from "axios";

const Signin = () => {
  // const [inputID, setInputID] = useState("");
  // const changeInputID = (e) => {
  //   setInputID(e.target.value);
  // };

  const [signin, setSignin] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signin;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const goSignin = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   dispatch(signinPage(signin));
  //   // navigate.push('/');
  // };

  const signinButton = () => {
    alert("로그인버튼누름");

    axios
      .post("http://localhost:8080/users/signin", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("signin res : ", res);
      })
      .catch((err) => console.log(err));

    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignin({
      ...signin,
      [name]: value,
    });
  };

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            <img src={Betazon} alt="betazon_logo" className="betazonLogo" />
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                onChange={handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={handleChange}
              />
              <Button secondary onClick={signinButton}>
                로그인
              </Button>
            </Segment>
          </Form>

          <Message>
            회원가입이 안됬나요?ㅤ <SignupButtonComponent />
          </Message>
        </Grid.Column>
      </Grid>
      );
    </>
  );
};
export default Signin;