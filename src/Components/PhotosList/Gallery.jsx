import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./style.scss";
const Gallery = ({ images, setZoom }) => {
  return (
    <div className="list-margin ">
      <GridList cellHeight={375} cols={3}>
        {images.map((img) => (
          <GridListTile
            style={{ flexGrow: "1" }}
            cols={(img.width / 1200 / 2).toFixed(0)}
          >
              <img
                className="img-grid"
                src={img.urls.regular}
                key={img.id}
                alt="photo"
              />
            <div className="image_over" onClick={() => setZoom(img.urls.regular)}>
              <div className="author_name">by: {img.user.first_name}</div>
              <p className="img_likes"> ❤ {img.likes} ❤</p>
              <p> Click to enlarge🔎</p>
            </div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Gallery;
