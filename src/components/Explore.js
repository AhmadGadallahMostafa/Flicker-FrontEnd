import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import Nav from 'react-bootstrap/Nav'
import ExploreImages from './ExploreImages'
// import UploadImage from './UploadImage';
import SearchBox from './SearchBox'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import InfiniteImageScrolling from './InfiniteImageScrolling'

const PrintsButton = () => {
	const [exploreImages, setImages] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedTab, setSelectedTab] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);

	const showSelectedTab = () => {
		switch (selectedTab) {
			case 1:
				return (<div>
					{exploreImages && (exploreImages.filter(image => image.title)) && <ExploreImages exploreImages={exploreImages} />}
					</div>);
			case 2:
				return null;
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

	InfiniteImageScrolling(pageNumber);

	return (
		<div className="explore-container">
			<Navbar bg="light" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<p onClick={() => { setSelectedTab(1); }} className={(selectedTab === 1) ? "prints-navbar-text selected-tab" : "prints-navbar-text"}>Photostream</p>
						<p onClick={() => { setSelectedTab(2); }} className={(selectedTab === 2) ? "prints-navbar-text selected-tab" : "prints-navbar-text"}>Albums</p>
						<p onClick={() => { setSelectedTab(3); }} className={(selectedTab === 3) ? "prints-navbar-text selected-tab" : "prints-navbar-text"}>Upload</p>
					</Nav>
					<Nav>
						<div className="spacing">a</div>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="explore-images-container">
				{showSelectedTab()}
			</div>

			{/*<Button onClick={() => setPageNumber(2)}> a</Button>*/}
		</div>

		
	);
}

export default PrintsButton;