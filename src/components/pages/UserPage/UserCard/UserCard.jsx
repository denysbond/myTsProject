import classes from './UserCard.module.css'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../../redux/reducers/modalReducer/modalReducerActions'

export const UserCard = ({ user, users }) => {
	const dispatch = useDispatch()
	return (
		<div className={classes.root}>
			<span>{user.name}</span>
			<span>{user.email}</span>
			<span>{user.address?.city}</span>
			<button onClick={() => dispatch(openModal('delete', user._id, users))}>
				delete
			</button>
		</div>
	)
}
