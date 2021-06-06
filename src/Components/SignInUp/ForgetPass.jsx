import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container, Image } from "react-bootstrap";
import { useAuth } from "../Authorization/AuthProvider";
import { Link } from "react-router-dom";
import Wait from "./Wait";
import "./style.scss";
import NullNav from "./NullNav";

const Forget = () => {
  const emailRef = useRef();
  const { reset } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await reset(emailRef.current.value);
      setMessage("check your mailbox to reset your password");
    } catch {
      setError("Failed to reset message");
    }
    setLoading(false);
  }

  return (
    <>
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
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="w-100 mt-2"
                    disabled={loading}
                  >
                    Reset Password
                  </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                  <Link to="/login">login </Link>
                </div>
                <hr class="hr-text" data-content="OR" />
                <div className="w-100 text-center mt-2">
                  need account ? <Link to="/signup">Sign Up</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Forget;
