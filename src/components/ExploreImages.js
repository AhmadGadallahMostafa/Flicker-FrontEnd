import './index.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
const token = 123; // placeholder

const ExploreImages = ({ exploreImages }) => {
	const [favImages, setFavImages] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [show, setShow] = useState(false);
	const [comments, setComments] = useState(null);
	// const [commenters, setCommenters] = useState(null);
	
		useEffect(() => {
			axios({
				method: 'GET',
				url: 'https://www.thealphaflickr.xyz/api/photos/user-favorite/',
				data: {
					token: token
				}
			})
			.then(data => {
				// console.log(data.length);
				setFavImages(data);
			})
			.catch(e => {
				console.log(e.response);
			});
	}, [updated])

	const fetchData = () => {
		fetch('https://www.thealphaflickr.xyz/api/photos/user-favorite/') // Favorites - Get list of user favorite photos
		.then(res => {
			return res.json();
		})
		.then(data => {
			console.log(data.length);
			setFavImages(data);
		})
		.catch(error => {
			console.log(error);
		  })
	}

	const toggleFavorite = (id) => {
	if (id == null) return;
		if ((favImages && (favImages.find(favImage => (favImage.id === id))))) {
			axios({
				method: 'DELETE',
				url: ('https://www.thealphaflickr.xyz/api/photos/favorite/' + id), // Favorites - Delete a favorite from a photo
				data: {
					token: 123,
					photoId: id
				}
			})
			.then(res => {
				console.log(res);
				fetchData();
			})
			.catch(e => {
				console.log(e.response);
			});
		}
		else {
			axios({
				method: 'POST',
				url: ('https://www.thealphaflickr.xyz/api/photos/favorite/' + id), // Favorites - Add a favorite to a photo
				data: {
					token: 123,
					photoId: id
				}
			})
			.then(res => {
				console.log(res);
				fetchData();
			})
			.catch(e => {
				console.log(e.response);
			});
		}
	}

	const fetchComments = (id) => {
		axios({
			method: 'GET',
			url: ('http://localhost:8000/photo/comments/' + id), // Comments - Get list of comments on a photo
			data: {
				photoId: id
			}
		})
		.then(res => {
			// console.log(res.data);
			setComments(res.data);
		})
		.catch(e => {
			console.log(e.response);
		});
	}
/*
	const fetchCommenters = (id) => {
		axios({
			method: 'GET',
			url: 'http://localhost:8000/users', // Comments - Get list of comments on a photo
			data: {
				id: id
			}
		})
		.then(res => {
			console.log(res.data);
			setCommenters(res.data);
		})
		.catch(e => {
			console.log(e.response);
		});
	}
*/

	return (
		<div className="explore-image-gallery">
			
				{exploreImages.map((image => (
					<div className="explore-grid-item" onClick={() => { /* Go to photo page */ }} key={image.id}>
						<img className="explore-grid-item-image" src={image.url} alt={image.title} />
						<div className="explore-image-footer">
							<div className="explore-grid-item-text" >{image.title}</div>
							<div className="explore-grid-item-subtext" >by {image.author}</div>
							<div className={((favImages && (favImages.find(favImage => (favImage.id === image.id)))) ? "explore-favorite-yes" : "explore-favorite")} onClick={() => toggleFavorite(image.id)} ></div>
							<div className="favorited-count" onChange={() => setUpdated(!updated)}>{image.favoritesIds.length}</div> {/* Should be the fetched number of favorites */}
							<div className="explore-comment" onClick={() => {fetchComments(image.id); /*fetchCommenters(image.id);*/ setShow(true)}}></div> {/* Should be the fetched number of comments */}
							<div className="explore-curate"></div>

					<Modal show={show} onHide={() => setShow(false)} size="xl" dialogClassName="modal-90h" scrollable={true} aria-labelledby="example-custom-modal-styling-title" centered>
					<Modal.Body>
						{comments ? (
						<div>{comments.map((comment => (
							<div>{comment.text}</div>)))}</div>) : "No comments!"}
					</Modal.Body>
					<Modal.Footer>
							<b>Post a comment!</b>
					</Modal.Footer>
				</Modal>
						</div>
					</div>
				)))}
			

		</div>
	);
}

export default ExploreImages;