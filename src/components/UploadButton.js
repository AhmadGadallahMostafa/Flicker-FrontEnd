import { useState } from 'react';
import axios from 'axios';

const UploadButton = ( {setSelectedImage} ) => {

	const [uploadedFile, setUploadedFile] = useState(null);
	const [isImage, setIsImage] = useState(null);
	const [loadingProgress, setLoadingProgress] = useState(0);

	function setSelectedFile (event) {
		// console.log(event.target.files[0]);
		if (event.target.files[0].type.startsWith('image/')) {
			setIsImage(true);
			setUploadedFile(event.target.files[0]);
		}
		else {
			setIsImage(false);
		}
	}
	
	const toggleErrorMessage = () => {
		if (isImage == null) return (<div>Upload an image to your photostream from here!</div>);
		switch (isImage) {
			case (true): 
			{
				return (<div></div>);
			}
			case (false): 
			{
				return (<div>The file is not an image! Please select an image to upload.</div>);
			}
			default: {
				return null;
			}
		}
	}

	function fileUpload() {
		if (uploadedFile == null || isImage == false) return;
		axios({
			method: 'POST',
			url: 'http://localhost:8000/images',
			data: {
				title: (uploadedFile.name.slice(0, -4)),
				url: URL.createObjectURL(uploadedFile),
				// author: username
			},
			onUploadProgress: (progressEvent) => {
				const {loaded, total} = progressEvent;
				let percent = Math.floor( (loaded *100 ) / total );
				setLoadingProgress(percent);
			}
		})
		.then(res => {
			// console.log(res);
			setSelectedImage(res.data.id);
		})
		.catch(e => {
			console.log(e.response);
		});
	}

	return (
		<div className="upload-button">
			
			<input className="upload-button" type="file" onChange={ setSelectedFile }/>
			{<button onClick={fileUpload}>Upload!</button>}
			{(loadingProgress == 100) ? <div>Image uploaded successfully to the photostream!</div> : null}
			{toggleErrorMessage()}

		</div>
	);
}

export default UploadButton