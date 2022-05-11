import React, { useState } from 'react'
import classes from './SettingsPage.module.css'
import { Form, Field } from 'react-final-form'
import ImageUploader from '../../ImageUploader/ImageUploader'
import { useDispatch } from 'react-redux'
import {
	updateUserImage,
	updateUserData,
} from '../../../redux/reducers/userSettingsReducer/userSettingsThunk'

export const SettingsPage = () => {
	const [selectedImg, setSelectedImg] = useState('')
	const dispatch = useDispatch()
	const user = JSON.parse(localStorage.getItem('user'))

	const onSubmit = (values) => {
		const formData = new FormData()
		formData.append('profileImg', selectedImg)
		const { name, email, city, street } = values
		dispatch(
			updateUserData(user._id, { name, email, address: { city, street } })
		)
		dispatch(updateUserImage(user._id, formData))
	}

	let formData = {
		name: user.name,
		email: user.email,
		city: user.address?.city,
		street: user.address?.street,
	}

	return (
		<div className={classes.root}>
			<h1 className={classes.heading}>Сторінка налаштувань юзера</h1>
			<div className={classes.userBlock}>
				<Form onSubmit={(values) => onSubmit(values)}>
					{(props) => (
						<form className={classes.form} onSubmit={props.handleSubmit}>
							<Field name='profileImg'>
								{({ input }) => (
									<ImageUploader
										onImgSelectSuccess={(file) => setSelectedImg(file)}
										onImgSelectError={({ error }) => alert(error)}
										input={input}
									/>
								)}
							</Field>
							<Field
								name='email'
								component='input'
								type='email'
								placeholder='email'
								className={classes.field}
							/>

							<Field
								name='name'
								component='input'
								type='text'
								placeholder='name'
								className={classes.field}
							/>
							<Field
								name='city'
								component='input'
								type='text'
								placeholder='city'
								className={classes.field}
							/>
							<Field
								name='street'
								component='input'
								type='street'
								placeholder='street'
								className={classes.field}
							/>
							<button className={classes.button} type='submit'>
								Submit
							</button>
						</form>
					)}
				</Form>
			</div>
		</div>
	)
}
