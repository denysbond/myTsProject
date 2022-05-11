import {
	GET_ACCESS_TOKEN,
	LOGIN_REQUEST,
	LOGOUT_REQUEST,
} from '../../actionTypes/loginActionTypes'

export const actions = {
	loginRequest: (payload) => {
		return {
			type: LOGIN_REQUEST,
			payload,
		}
	},

	getAccessToken: (payload) => {
		return {
			type: GET_ACCESS_TOKEN,
			payload,
		}
	},
	logoutRequest: (payload) => {
		return {
			type: LOGOUT_REQUEST,
			payload,
		}
	},
}
