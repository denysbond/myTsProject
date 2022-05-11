import { GET_USER_REQUEST } from '../../actionTypes/userActionsTypes'

export const actions = {
	getUserRequest: (payload) => ({
		type: GET_USER_REQUEST,
		payload,
	}),
}
