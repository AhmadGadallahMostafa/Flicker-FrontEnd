import { useState } from "react";

const GalleryImages = ({ galleryImages, url, title, author, id, selectedImage, setSelectedImage }) => {

	const [isActive, setActive] = useState('');

	return (
		<div className="image-gallery">
			{galleryImages.map((image => (
				<div className={isActive === image.id ? "grid-item active" : "grid-item"} onClick={() => { setActive(image.id); setSelectedImage(image.id) }} key={image.id}
				// <div className = "grid-item"
				// {isActive ? "grid-item" : "grid-item selectedImage"}
				//onClick={() => setSelectedImage(image)}	
				// onClick={() => selectImage2} onClick={() => console.log(isActive)}
				>
					<img className={isActive === image.id ? "grid-item-image active" : "grid-item-image"} src={image.url} alt={image.title} />
					<div className="grid-text">
						<div className="grid-item-text" >{image.title}</div>
						<div className="grid-item-subtext" >by {image.author}</div>
					</div>
				</div>
			)))}
		</div>
	);
}

export default GalleryImages