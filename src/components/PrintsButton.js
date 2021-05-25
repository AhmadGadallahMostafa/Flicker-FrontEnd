import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import Nav from 'react-bootstrap/Nav'
import GalleryImages from './GalleryImages';
// import UploadImage from './UploadImage';
import SearchBox from './SearchBox'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const PrintsButton = () => {
	const [show, setShow] = useState(false);
	const [galleryImages, setImages] = useState(null);
	const [searchField, setSearchField] = useState('');
	const [selectedImage, setSelectedImage] = useState(null);


	useEffect(() => {
		fetch('http://localhost:8000/images')
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setImages(data);
			})
	}, [])

	return (

		<div className="prints-image-area">
			<h1 className="prints-image-area-text">Prints & Wall Art</h1>
			<br />
			<p className="prints-image-area-text">Get stunning wall art and high-quality prints of your photos</p>
			<br />
			<Button variant="outline-dark" className="prints-image-area-text" onClick={() => setShow(true)} >Choose photos</Button>

			<Modal show={show} onHide={() => setShow(false)} size="xl" dialogClassName="modal-90h" scrollable={true} aria-labelledby="example-custom-modal-styling-title">

				<Modal.Header closeButton>
					<nav className="printsNavbar">
						<Link to="#" className="prints-navbar-text">Test</Link>
						<Link to="/1" className="prints-navbar-text">Test2</Link>
						<Link to="/2" className="prints-navbar-text">Test3</Link>

						<SearchBox class="navbar-nav text-right" placeholder="Search" handleChange={(e) => setSearchField(e.target.value)} />
					</nav>
				</Modal.Header>

				<Modal.Body className="grid-container">

					{galleryImages && (galleryImages.filter(image => image.title)) && <GalleryImages galleryImages={galleryImages.filter(image => image.title.toLowerCase().includes(searchField.toLowerCase()))} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
					{galleryImages && (galleryImages.filter(image => image.title)) && (galleryImages.filter(image => image.title.toLowerCase().includes(searchField.toLowerCase()))) == "" && <center>No search results found for "{searchField}"<br /> Try uploading some images!</center>}

				</Modal.Body>

				<Modal.Footer>
					<p className="footer-text">Choose a photo to get prints and wall art.</p>
					<Button variant={"primary"} className="footer-button" disabled={(selectedImage === null) ? true : false}>Buy prints</Button>
				</Modal.Footer>
			</Modal>

		</div>
	);
}

export default PrintsButton;