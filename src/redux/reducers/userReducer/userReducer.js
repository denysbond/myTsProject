import { GET_USER_REQUEST } from '../../actionTypes/userActionsTypes'

const initialState = {
	users: [],
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_REQUEST:
			return {
				...state,
				users: action.payload,
			}
		default:
			return state
	}
}
