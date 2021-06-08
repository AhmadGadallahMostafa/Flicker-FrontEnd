import { useState } from "react";

const GalleryImages = ({ galleryImages, setSelectedImage }) => {

	const [isActive, setActive] = useState('');
	/*
	const getSrc = (id) => {
		fetch() // Photo - Returns photo itself
			.then(res => {
				return res.json();
			})
			.then(data => {
				// console.log(data.length);
				// setFavImages(data);
				return data;
			})
			.catch(error => {
				console.log(error);
			  })
	}
*/
	return (
		<div className="image-gallery">
			{galleryImages.map((image => (
				<div className={isActive === image._id ? "grid-item active" : "grid-item"} onClick={() => { setActive(image._id); setSelectedImage(image._id) }} key={image._id}>
					<img className={isActive === image._id ? "grid-item-image active" : "grid-item-image"} src={'https://www.thealphaflickr.xyz/api/photos/photo/' + image._id} alt={image.title} />
					<div className="grid-text">
						<div className="grid-item-text" >{image.title}</div>
						<div className="grid-item-subtext" >by {image.authorId /**Should be just author? */}</div>
					</div>
				</div>
			)))}
		</div>
	);
}

export default GalleryImages;
