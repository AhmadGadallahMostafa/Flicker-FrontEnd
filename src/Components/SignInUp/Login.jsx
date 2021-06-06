import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert ,Container,Image} from "react-bootstrap";
import { useAuth } from "../Authorization/AuthProvider";
import { Link, useHistory } from "react-router-dom";
import "./style.scss"
import Wait from "./Wait";
import NullNav from "./NullNav";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Login Failed The email or the password might be wrong");
    }
    setLoading(false);
  }

  return (
    <div className="bg-img">
    <NullNav/>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
        {loading ? <Wait/> :
         <div className="icon"><Image className="align-items-center" src="https://www.freeiconspng.com/thumbs/flickr-logo-png/flickr-logo-png-17.png" fluid /></div> }
          <h2 className="text-center mb-4">Log In Flickr</h2>

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
              <Button variant="primary" type="submit" className="w-100 mt-2" disabled={loading}>
                Log In 
              </Button>
            </Form>
            <hr></hr>
          </Card.Body>
          <p className="w-100 text-center mt-2">
          Don't have an account ? <Link to="/signup">Sign Up</Link>
        </p>
        </Card>
      </div>
    </Container>
    </div>
  );
};

export default Login;
