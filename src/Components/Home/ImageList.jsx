import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss"
const ImageList =({images}) =>{
    return (
        <div>
        <Carousel className="carousel-inner" fade controls={false} pause={false}>
        {images.map((image) => (
            <Carousel.Item interval={5000} key={image.id}>
          <img
            className="d-block w-100 carouselImage"
            src={image.url}
            alt="slide Image"
          />
          <Carousel.Caption>
            <h4>{image.author}</h4>
            <p>{image.location}</p>
          </Carousel.Caption>
        </Carousel.Item>
        )
            )}
            </Carousel>
        </div>
    );
 


}
export default ImageList;



