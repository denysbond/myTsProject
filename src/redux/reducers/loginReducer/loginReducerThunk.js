import { apiLogin } from '../../../api/apiLogin'
import { actions } from './loginActions'

export const sendLoginData = (data) => {
	return async (dispatch) => {
		await apiLogin
			.loginRequest(data)
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem('user', JSON.stringify(data))
				dispatch(actions.loginRequest(JSON.parse(localStorage.getItem('user'))))
			})
	}
}

export const authCheck = () => {
	return async (dispatch) => {
		await apiLogin.authRequest().then((res) => {
			if (res.ok) {
				dispatch(actions.getAccessToken(true))
			}
		})
	}
}

export const logoutRequest = () => {
	return async (dispatch) => {
		await apiLogin.logoutRequest().then((res) => {
			if (res.ok) {
				dispatch(actions.logoutRequest(false))
				localStorage.removeItem('user')
			}
		})
	}
}
