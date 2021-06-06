import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom"
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageList from "./ImageList";
import "./style.scss";
function HomeCarousel() {
  const [images, setImages] = useState(null);
  const history = useHistory();
  const handleClick = () => history.push("/signup");
  useEffect(() => {
    fetch("http://localhost:8000/images")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImages(data);
      });
  }, []);

  return (
    <div>
      {images && <ImageList images={images} />}
      <div className="text-over">
        <h1 className="size-header">Find your inspiration.</h1>
        <p className="paragraph"> Join the Flickr community, home to tens of billions of </p>
        <p className="paragraph"> photos and 2 million groups</p>
        <div className="btn-signup">
          <Button variant="light" size="lg" onClick={handleClick}>
            {" "}
            Start For Free
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
