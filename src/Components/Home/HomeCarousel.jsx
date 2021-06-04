import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageList from "./ImageList";
function HomeCarousel() {
  const [images, setImages] = useState(null);
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
     {images && <ImageList images={images}/>}
        <h1 className="headH1">Find your inspiration.</h1>
        <Button className="mainBtn" variant="light" size="lg">
          {" "}
          Start For Free
        </Button>
      </div>
  );
}

export default HomeCarousel;
