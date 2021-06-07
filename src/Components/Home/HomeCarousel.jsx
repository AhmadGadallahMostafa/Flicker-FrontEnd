import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom"
import {  Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageList from "./ImageList";
import "./style.scss";
function HomeCarousel() {
  const [images, setImages] = useState([]);
  const history = useHistory();
  const handleClick = () => history.push("/signup");
  // This is not a perfect API call as I cannot get this exact json file elements i added the API call in the URL
    var list =
    [
      {
        "id": 1,
        "title": "Lost in NewYork",
        "author": "Monica Robert",
        "location": "New York",
        "url": "https://thealphaflickr.xyz/api/photos/photo/60bde57f644de117cbed3600"
      },
      {
        "id": 2,
        "title": "Sky is the limit",
        "author": "Samir Moussa",
        "location": "Zurich,Switzerland",
        "url": "https://thealphaflickr.xyz/api/photos/photo/60bde577644de117cbed35ff"
      },
      {
        "id": 3,
        "title": "The Camp of cars",
        "author": "Joseph peterson",
        "location": "Moab,Utah",
        "url": "https://thealphaflickr.xyz/api/photos/photo/60bde571644de117cbed35fe"
      }
    ];
  useEffect(() => {
        setImages(list);
  }, []);
 
  /* useEffect(() => {   this was a json server call ( phase1)
    fetch("http://localhost:8000/images")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImages(data);
      });
  }, []); */

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
            Start For Free Now!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
