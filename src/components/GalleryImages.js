import { useState } from "react";

const GalleryImages = ({galleryImages, url, title, author, id,selectedImage,setSelectedImage}) => {

	const [isActive, setActive] = useState('');

	return (
	<div className = "imageGallery">
		{galleryImages.map((image => (
			<div className = {isActive === image.id ? "gridItem active" : "gridItem"} onClick={() => {setActive(image.id); setSelectedImage(image.id)}} key={image.id} 
			// <div className = "griditem"
			// {isActive ? "gridItem" : "gridItem selectedImage"}
				//onClick={() => setSelectedImage(image)}	
				// onClick={() => selectImage2} onClick={() => console.log(isActive)}
			> 
			<img className = {isActive === image.id ? "gridItemImage active" : "gridItemImage"} src={image.url} alt = {image.title} />
				<div className = "gridText">
					<div className = "gridItemText" >{image.title}</div>
					<div className = "gridItemSubText" >by {image.author}</div>
				</div>
			</div>
		)))}
	</div>
	);
}

export default GalleryImages