import React, { useEffect, useState } from 'react';
import ExploreImages from './ExploreImages';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import { axios } from 'axios';

const PrintsButton = () => {
	const [exploreImages, setImages] = useState(null);
	const [currentLength, setCurrentLength] = useState(0);
	const [previousLength, setPreviousLength] = useState(0);

	useEffect(() => {

		axios({
			method: 'GET',
			url: ('https://www.thealphaflickr.xyz/api/photos/' + 15), // Photo - Returns list of recently uploaded photos without the photo
		})
			.then(data => {
				// console.log(data.length);
				setImages(data);
			})
			.catch(e => {
				console.log(e.response);
			});

	}, [])

	const fetchData = () => {
		setPreviousLength(currentLength);

		axios({
			method: 'GET',
			url: ('https://www.thealphaflickr.xyz/api/photos/' + (currentLength + 15)), // Photo - Returns list of recently uploaded photos without the photo
		})
			.then(data => {
				setImages(data);
				setCurrentLength(data.length);
			})
			.catch(e => {
				console.log(e.response);
			});
	}

	return (
		<div className="explore-container">
			<Navbar bg="light" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link Link to={"/explore"} className="prints-navbar-text selected-tab">Explore</Link>
						<Link Link to={"/photos/tags"} className="prints-navbar-text">Trending</Link>
						<Link Link to={"/events"} className="prints-navbar-text">Events</Link>
					</Nav>
					<Nav>
						<NavDropdown title="More" id="nav-dropdown">
							<NavDropdown.Item>
								<Link Link to={"commons"}>The Commons</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link Link to={"galleries"}>Galleries</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link Link to={"map"}>World Map</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link Link to={"services"}>App Garden</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link Link to={"cameras"}>Camera Finder</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link Link to={"weekly"}>The Weekly Flickr</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link Link to={"blogs"}>Flickr Blog</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="explore-images-container">
				{exploreImages && <InfiniteScroll
					dataLength={currentLength}
					next={() => fetchData()}
					hasMore={(currentLength - previousLength) > 0 ? false : true}
					loader={<span><br /><p className="infinite-scroll-text">Loading...</p></span>}
					endMessage={<span><br /><p className="infinite-scroll-text">No more images here!</p></span>}
				>
					{exploreImages && (exploreImages.filter(image => image.title)) && <ExploreImages exploreImages={exploreImages} />}
				</InfiniteScroll>
				}
			</div>
		</div>


	);
}

export default PrintsButton;