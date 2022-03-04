import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault()
		console.log('Submitted')
	}

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="userename">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
						onChange={(e) => setUsername(e.target.value)}
          >
					</Form.Control>
        </Form.Group>

				<Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
						onChange={(e) => setPassword(e.target.value)}
          >
					</Form.Control>
        </Form.Group>

				<Button type="submit" variant="primary">Sign In</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
