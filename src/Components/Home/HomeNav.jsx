import React from "react";
import {useHistory} from "react-router-dom"
import {
  Nav,
  Button,
  Navbar
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

function HomeNav() {
  const history = useHistory();
  const handleClick2 = () => history.push("/signup");
  const handleClick1 = () => history.push("/login");
  return (
    <div>
      <Navbar fixed="top" bg="MyNav" expand="lg" variant="dark">
        <Navbar.Brand className="logo" href="#home">
          <img
            style={{ marginRight: "10px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flickr_dots.svg/1200px-Flickr_dots.svg.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <img
            src="https://b4rks.uk/images/flickrwhite.png"
            width="86.28"
            height="27"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
        <Button
          variant="info"
          style={{ marginRight: "10px"}}
          onClick={handleClick1}
        >
          Log In
        </Button>
        <Button variant="outline-light" onClick={handleClick2}>
          Sign Up
        </Button>
        </Nav>
      </Navbar>
    </div>
  );
}

export default HomeNav;
