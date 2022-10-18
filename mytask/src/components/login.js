import React, { useState } from "react";
import axios from "axios";
import { Typography } from "antd";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginImage from "./LoginImage";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    Password: "",
    showPass: false,
  });
  console.log("");
  const handlePassvisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: values.email,
        password: values.Password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <LoginImage />
      <div style={{ marginLeft: "1180px" }}>
        <Title level={1}>Logo</Title>
      </div>
      <div style={{ marginLeft: "1000px", marginTop: "70px" }}>
        <Title level={4}>Welcome Back</Title>
        <Text type="secondary">Continue where you left off</Text>
        <br />
        <br />
        <Text strong>Login</Text>
      </div>{" "}
      <br />
      <Form className="login-form" onSubmit={onSubmit} autoComplete="off">
        <Form.Group>
          <Form.Label style={{ color: "grey" }}>Username</Form.Label>
          <Form.Control
            required
            sm={7}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label style={{ color: "grey" }}>Password</Form.Label>
          <Form.Control
            required
            type={values.showPass ? "text" : "password"}
            onChange={(e) => setValues({ ...values, Password: e.target.value })}
          />
          <span className="icon-span" onClick={handlePassvisibilty}>
            {values.showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </Form.Group>
        <br />
        <Row>
          <Form.Group>
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Form.Group>
            <Link to="#" className="login-form-forgot">
              {" "}
              Forgot your password?
            </Link>
          </Form.Group>
        </Row>
        <br />
        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="login-form-button"
            style={{ backgroundColor: "green" }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
