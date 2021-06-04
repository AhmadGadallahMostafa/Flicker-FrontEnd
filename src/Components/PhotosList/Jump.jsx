import React from "react";
import "./style.scss"
import {Jumbotron, Container} from "react-bootstrap";
const Jump = () => {
  return (
    <div className="jumbo">
      <Jumbotron >
        <Container>
          <h1 className="header">Welcome To flickr search!</h1>
          <p>
            Behind every photo is a story.
          </p>
          <p> Go find your inspiration</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jump;
