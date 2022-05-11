import {
	LOGIN_REQUEST,
	GET_ACCESS_TOKEN,
	LOGOUT_REQUEST,
} from '../../actionTypes/loginActionTypes'

const initialState = {
	user: null,
	isAuth: false,
}

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				user: action.payload,
			}
		case GET_ACCESS_TOKEN:
			return {
				...state,
				isAuth: action.payload,
			}
		case LOGOUT_REQUEST:
			return {
				...state,
				isAuth: action.payload,
			}
		default:
			return state
	}
}
