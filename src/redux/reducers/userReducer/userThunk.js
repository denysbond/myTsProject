import { actions } from './userActions'

export const getAllUsers = () => {
	return async (dispatch) => {
		return fetch('https://finalprojectapi.magisoft.solutions/users', {
			method: 'GET',
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => dispatch(actions.getUserRequest(data.results)))
	}
}

export const deleteUser = (_id, users) => {
	return async (dispatch) => {
		return fetch('https://finalprojectapi.magisoft.solutions/users/' + _id, {
			method: 'DELETE',
			credentials: 'include',
		})
			.then((res) => console.log(res.status))
			.then(() =>
				dispatch(
					actions.getUserRequest(users.filter((user) => user._id !== _id))
				)
			)
	}
}
