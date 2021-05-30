import { useState } from "react";

const Albums = ({ albums, galleryImages, ids, title, setSelectedAlbum }) => {

	const [isActive, setActive] = useState('');

	return (
		<div className="image-gallery">
			{albums.map((album => (
				<div className="grid-item active" key={album.id}
				// <div className = "grid-item"
				// {isActive ? "grid-item" : "grid-item selectedImage"}
				//onClick={() => setSelectedImage(image)}	
				// onClick={() => selectImage2} onClick={() => console.log(isActive)}
				>
					<img className="grid-item-image" alt={album.title} src={galleryImages.find(image => (image.id === album.ids[0])).url} />
					<div className="grid-text">
						<div className="grid-item-text" >{album.title}</div>
						<div className="grid-item-subtext" >{album.ids.length} photos</div>
					</div>
				</div>
			)))}
		</div>
	);
}

export default Albums