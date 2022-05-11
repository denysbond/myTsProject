import React from 'react'
import classes from './ModalWindow.module.css'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Form, Field } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux'
import { modalList, modalId, modalOpen, modalType } from '../../redux/selectors'
import {
	deletePost,
	createPost,
	updatePost,
} from '../../redux/reducers/getPostsReducer/getPostsThunk'
import { closeModal } from '../../redux/reducers/modalReducer/modalReducerActions'
import { deleteUser } from '../../redux/reducers/userReducer/userThunk'

export const ModalWindow = () => {
	const dispatch = useDispatch()
	const isOpen = useSelector(modalOpen)
	const type = useSelector(modalType)
	const list = useSelector(modalList)
	const id = useSelector(modalId)

	const fn = type === 'create' ? createPost : updatePost

	const onSubmit = (values) => {
		dispatch(fn(values, id, list))
		dispatch(closeModal())
	}
	const deleteClick = () => {
		if (list[0].author) {
			dispatch(deletePost(id, list))
		} else {
			dispatch(deleteUser(id, list))
		}

		dispatch(closeModal())
	}
	return (
		<Modal className={classes.root} fade={false} isOpen={isOpen}>
			<ModalHeader>
				{type === 'delete' && 'Ви впевнені?'}
				{type === 'create' && 'Новий пост'}
				{type === 'update' && 'Редагування'}
			</ModalHeader>
			<ModalBody
				style={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '10px',
				}}
			>
				{type !== 'delete' && (
					<Form onSubmit={(values) => onSubmit(values)}>
						{(props) => (
							<form className={classes.form} onSubmit={props.handleSubmit}>
								<Field
									name='title'
									component='input'
									type='text'
									placeholder='title'
									className={classes.field}
								/>
								<Field
									component='textarea'
									name='content'
									type='text'
									placeholder='subtitle'
									className={classes.field}
								/>

								<div className={classes.buttonBlock}>
									<button type='button' onClick={() => dispatch(closeModal())}>
										Cкасувати
									</button>
									<button className={classes.button} type='submit'>
										Підтвердити
									</button>
								</div>
							</form>
						)}
					</Form>
				)}
				{type === 'delete' && (
					<div className={classes.buttonBlock}>
						<button type='button' onClick={() => dispatch(closeModal())}>
							Ні
						</button>
						<button onClick={deleteClick} className={classes.button}>
							Так
						</button>
					</div>
				)}
			</ModalBody>
		</Modal>
	)
}
