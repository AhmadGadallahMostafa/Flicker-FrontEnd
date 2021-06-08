import './index.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GalleryImages from './GalleryImages';
import SearchBox from './SearchBox';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Albums from './Albums';
import UploadButton from './UploadButton';
import { Link } from 'react-router-dom';
const userId = "60b6ea64c026a02ea78531e6"; // placeholder

const PrintsButton = () => {
	const [show, setShow] = useState(false);
	const [galleryImages, setImages] = useState(null);
	const [albums, setAlbums] = useState(null);
	const [searchField, setSearchField] = useState('');
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedTab, setSelectedTab] = useState(1);

	const showSelectedTab = () => {
		switch (selectedTab) {
			case 1:
				if(galleryImages)
					console.log(galleryImages.photos);	
				return (<div>
					{galleryImages && (galleryImages.photos.filter(image => image.title)) && <GalleryImages galleryImages={galleryImages.photos.filter(image => image.title.toLowerCase().includes(searchField.toLowerCase()))} setSelectedImage={setSelectedImage} />}
					{galleryImages && (galleryImages.photos.filter(image => image.title)) && (galleryImages.photos.filter(image => image.title.toLowerCase().includes(searchField.toLowerCase()))) === "" && <center>No search results found for "{searchField}"<br /> Try uploading some images!</center>}
					</div>);
			case 2:
				return (<div>
					{(albums.count > 0) && galleryImages && <Albums albums={albums} galleryImages={galleryImages}/>}
				</div>);
			case 3:
				return <UploadButton setSelectedImage={setSelectedImage}/>;
			default:
				return null;
				// break;
		}
	}

	useEffect(() => {
		fetch('https://www.thealphaflickr.xyz/api/photos/user-photos/' + userId) // Photo - Returns photos uploaded by given user
			.then(res => {
				return res.json();
			})
			.then(data => {
				// console.log(data);
				setImages(data);
			})
			.catch(error => {
				  console.log(error);
				})
		}, [])

	const updateImageData = () => {
		fetch('https://www.thealphaflickr.xyz/api/photos/user-photos/' + userId) // Photo - Returns photos uploaded by given user
			.then(res => {
				return res.json();
			})
			.then(data => {
				// console.log(data);
				setImages(data);
			})
			.catch(error => {
				console.log(error);
			  })
	}

	useEffect(() => {
		fetch('https://www.thealphaflickr.xyz/api/album/user-albums/' + userId) // Album - viewing albums
			.then(res => {
				return res.json();
			})
			.then(albums => {
				// console.log(data);
				setAlbums(albums);
			})
			.catch(error => {
				console.log(error);
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
							<p onClick={() => {setSelectedTab(1); setSelectedImage(null); updateImageData() }} className={(selectedTab === 1) ? "prints-navbar-text selected-tab" : "prints-navbar-text" }>Photostream</p>
							<p onClick={() => {setSelectedTab(2); setSelectedImage(null)} } className={(selectedTab === 2) ? "prints-navbar-text selected-tab" : "prints-navbar-text" }>Albums</p>
							<p onClick={() => {setSelectedTab(3); setSelectedImage(null)} } className={(selectedTab === 3) ? "prints-navbar-text selected-tab" : "prints-navbar-text" }>Upload</p>
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
					<Link to={"/prints/" + selectedImage} className='prints-link'>
						<Button variant={"primary"} className="footer-button" disabled={(selectedImage === null) ? true : false}>Buy prints</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default PrintsButton;
