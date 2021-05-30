import { useEffect, useState } from 'react'
import axios from 'axios'

const InfiniteImageScrolling = (pageNumber) => {

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=1e498748806a990d043cc260156001c0&per_page=10&format=rest',
			params: { page: pageNumber }
		}).then(res => {
			console.log(res.data);
		})
	}, [pageNumber])

	return null;
}

export default InfiniteImageScrolling;