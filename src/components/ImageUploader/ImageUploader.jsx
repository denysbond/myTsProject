import React, { useState } from 'react'
import classes from './ImageUploader.module.css'

const FileUploader = ({ onImgSelectSuccess, onImgSelectError, input }) => {
	const [imageUrl, setImageUrl] = useState('')

	const handleFileInput = (e) => {
		const file = e.target.files[0]
		if (file && file.size < 1048576) {
			const reader = new FileReader()

			reader.onload = function (e) {
				setImageUrl(e.target.result)
			}

			reader.readAsDataURL(file)
			onImgSelectSuccess(file)
		} else {
			onImgSelectError({ error: 'File size cannot exceed more than 1MB' })
		}
	}

	return (
		<div className={classes.imgUploader}>
			{imageUrl ? (
				<img src={imageUrl} id={classes.userImage} alt='userImage' />
			) : null}
			<input
				{...input}
				type='file'
				className={classes.imgUploaderInput}
				onChange={handleFileInput}
			/>
		</div>
	)
}

export default FileUploader
