import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import Nav from 'react-bootstrap/Nav'
import GalleryImages from './GalleryImages'
// import UploadImage from './UploadImage';
import SearchBox from './SearchBox'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

const PrintsButton = () => {
	const [show, setShow] = useState(false);
	const [galleryImages, setImages] = useState(null);
	const [searchField, setSearchField] = useState('');
	const [selectedImage, setSelectedImage] = useState(null);

	const [selectedTab, setSelectedTab] = useState(1);

	const showSelectedTab = () => {
		switch (selectedTab) {
			case 1:
				return (<div>
					{galleryImages && (galleryImages.filter(image => image.title)) && <GalleryImages galleryImages={galleryImages.filter(image => image.title.toLowerCase().includes(searchField.toLowerCase()))} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
					{galleryImages && (galleryImages.filter(image => image.title)) && (galleryImages.filter(image => image.title.toLowerCase().includes(searchField.toLowerCase()))) == "" && <center>No search results found for "{searchField}"<br /> Try uploading some images!</center>}
					</div>);
			case 2:
				return <p>Albums</p>;
			case 3:
				return <p>Upload</p>;
			default:
				return null;
				// break;
		}
	}


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

				<Navbar bg="light" expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<p onClick={() => setSelectedTab(1)} className="prints-navbar-text">Photostream</p>
							<p onClick={() => setSelectedTab(2)} className="prints-navbar-text">Albums</p>
							<p onClick={() => setSelectedTab(3)} className="prints-navbar-text">Upload</p>
						</Nav>
						<Nav>
							<Form inline>
								<SearchBox className="search" placeholder="Search" handleChange={(e) => setSearchField(e.target.value)} />
							</Form>
							<div className="spacing"></div>
						</Nav>
					</Navbar.Collapse>
					<Nav expand="true"><div className="close-button" onClick={() => setShow(false)}></div></Nav>
				</Navbar>
				

				<Modal.Body className="grid-container">
					{showSelectedTab()}
				</Modal.Body>

				<Modal.Footer>
					<div className="footer-text-container">
						<p className="footer-text">Choose a photo to get prints and wall art.</p>
					</div>
					<Button variant={"primary"} className="footer-button" disabled={(selectedImage === null) ? true : false}>Buy prints</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default PrintsButton;