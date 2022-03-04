import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <FormContainer>
      <h1>SIGN IN</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loading />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="userename">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <br />
        <Button type="submit" variant="primary" className="btn btn-primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link
            style={{ color: "white" }}
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
          >
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
