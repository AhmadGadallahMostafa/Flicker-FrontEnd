import { useState } from "react";

const GalleryImages = ({ galleryImages, setSelectedImage }) => {

	const [isActive, setActive] = useState('');

	return (
		<div className="image-gallery">
			{galleryImages.map((image => (
				<div className={isActive === image.id ? "grid-item active" : "grid-item"} onClick={() => { setActive(image.id); setSelectedImage(image.id) }} key={image.id}>
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