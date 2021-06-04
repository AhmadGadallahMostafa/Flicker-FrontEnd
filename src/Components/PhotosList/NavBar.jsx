import React from "react";

import {
  Nav,
  NavDropdown,
  Button,
  Form,
  Navbar,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss"

function NavBar() {
  return (
    <div>
      <Navbar  bg="dark" expand="lg" variant="dark">
        <Navbar.Brand className="logo" >
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
        <Button variant="info" style={{marginRight : '10px'}}>Log In</Button>
        <Button variant="outline-light">Sign Up</Button>
      </Navbar>
    </div>
  );
}

export default NavBar;
