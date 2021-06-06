import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container, Image } from "react-bootstrap";
import { useAuth } from "../Authorization/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
import Wait from "./Wait";
import NullNav from "./NullNav";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !passwordRef.current.value ||
      !passwordConfirmRef.current.value ||
      !emailRef.current.value
    ) {
      return setError("Those are Required Fields");
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        emailRef.current.value
      )
    ) {
      return setError("Invalid Email Address");
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(
        passwordRef.current.value
      )
    ) {
      return setError(
        "The Password must be at least 8 characters and contains at least : a lowercase, an uppercase and a number "
      );
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Account Already Exits");
    }
    setLoading(false);
  }

  return (
    <div className="bg-img">
      <NullNav />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              {loading ? (
                <Wait />
              ) : (
                <div className="icon">
                  <Image
                    className="align-items-center"
                    src="https://www.freeiconspng.com/thumbs/flickr-logo-png/flickr-logo-png-17.png"
                    fluid
                  />
                </div>
              )}
              <h2 className="text-center mb-4">Sign Up for Flickr</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>comfirm password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-2"
                  disabled={loading}
                >
                  Sign Up
                </Button>
              </Form>
              <hr class="hr-text" data-content="OR" />
              <Button variant="outline-primary" className="w-100 mt-2">Sign Up Using FaceBook <i class="fab fa-facebook-square"></i></Button>
            </Card.Body>
            <p className="w-100 text-center mt-2">
              Already have an account ? <Link to="/login">Log in</Link>
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
