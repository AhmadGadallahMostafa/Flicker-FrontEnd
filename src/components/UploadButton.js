import { useState } from 'react';
import axios from 'axios';
// import { formData } from 'form-data';

const UploadButton = ( {setSelectedImage} ) => {

	const [uploadedFile, setUploadedFile] = useState(null);
	const [isImage, setIsImage] = useState(null);
	const [loadingProgress, setLoadingProgress] = useState(0);

	const [token] = useState(localStorage.getItem("token"));
    if (token === null)
    {
        localStorage.clear();
        window.location.href = "/login";
    } 
	
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
		if (isImage == null) return (<div>Upload an image to your photostream from here!<br />
			The image will be uploaded to your photostream as a <strong>private</strong> image.
		</div>);
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
		if (uploadedFile == null || isImage === false) return;
		var formData = new FormData();
		formData.append("photo", uploadedFile);
		// console.log(formData.get)
		axios({
			method: 'POST',
			url: 'https://www.thealphaflickr.xyz/api/photos',
			// url: 'http://localhost:8000/photos/', // Photo - Upload a Photo for a given user // TODO
			data: {
				token: token,
				photo: formData,
				title: (uploadedFile.name.slice(0, -4)),
				// url: URL.createObjectURL(uploadedFile)//,
				isPublic: false
			},
			onUploadProgress: (progressEvent) => {
				console.log(uploadedFile);
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
			{(loadingProgress === 100) ? <div>Image uploaded successfully to the photostream!</div> : null}
			{toggleErrorMessage()}

		</div>
	);
}

export default UploadButton;
