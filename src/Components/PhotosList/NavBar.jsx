import React,{useState} from "react";

import {
  Button,
  Navbar,
  Alert,
  Nav
} from "react-bootstrap";
import { useHistory} from "react-router-dom";
import { useAuth } from "../Authorization/AuthProvider"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss"

function NavBar() {
  const history = useHistory();
  const { currentUser , logout} = useAuth();
  const [error, setError] = useState("");
  const handlePro = () => history.push("/account/upgrade/pro");
  async function handleLoggingOut(){
    setError("");
    try{
        await logout();
        history.push("/home");
    }catch{
        setError("Faield to log out , Try Again");
    }
}
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
        {error && <Alert variant="danger">{error}</Alert>}
        <Nav className="ml-auto">
        <Button variant="info" style={{marginRight : '10px'}} onClick={handleLoggingOut}>Log Out</Button>
        <Button variant="info" style={{marginRight : '10px'}} onClick={handlePro}>Become Pro member</Button>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
