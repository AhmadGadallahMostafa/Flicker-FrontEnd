const Albums = ({ albums, galleryImages }) => {

	const getSrc = (id) => {
		fetch('https://www.thealphaflickr.xyz/api/photos/photo/' + id) // Photo - Returns photo itself
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

	return (
		<div className="image-gallery">
			{albums.map((album => (
				<div className="grid-item active" key={album.id}>
					<img className="grid-item-image" alt={album.name} src={getSrc(albums.photo[0]).photoPath} /* also won't work *//> 
					<div className="grid-text">
						<div className="grid-item-text" >{album.name}</div>
						<div className="grid-item-subtext" >{album.items} photos</div>
					</div>
				</div>
			)))}
		</div>
	);
}

export default Albums