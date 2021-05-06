/*import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Form from 'react-bootstrap/Form'


const UploadImage = () => {
	const [files, setFiles] = useState([]);
	const {getRootProps, getInputProps} = useDropzone({
		accept: "image/*",
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) => Object.assign(file))
			)
		}
	})

	return (
	<div className = "uploadImage">
		<div {...getRootProps()}>
			<input {...getInputProps()}/>
			<p>Drop files here!</p>
		</div>
	</div>
	);
}

const UploadImage = () => {

	return (
		<Form>
		<Form.File 
			id="custom-file"
			label="Custom file input"
			custom
		/>
		</Form>
	);
}

export default UploadImage
*/