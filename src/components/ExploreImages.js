import { useState } from "react";

const ExploreImages = ({ exploreImages, url, title, author, id, selectedImage, setSelectedImage }) => {

	const [isActive, setActive] = useState('');

	return (
		<div className="explore-image-gallery">
			{exploreImages.map((image => (
				<div className={isActive === image.id ? "explore-grid-item active" : "explore-grid-item"} onClick={() => { setActive(image.id); setSelectedImage(image.id) }} key={image.id}
				// <div className = "grid-item"
				// {isActive ? "grid-item" : "grid-item selectedImage"}
				//onClick={() => setSelectedImage(image)}	
				// onClick={() => selectImage2} onClick={() => console.log(isActive)}
				>
					<img className={isActive === image.id ? "explore-grid-item-image active" : "explore-grid-item-image"} src={image.url} alt={image.title} />
					<div className="grid-text">
						<div className="grid-item-text" >{image.title}</div>
						<div className="grid-item-subtext" >by {image.author}</div>
					</div>
				</div>
			)))}
		</div>
	);
}

export default ExploreImages