import { REGISTER_DATA_POST } from '../../actionTypes/registerActionTypes'

const initialState = {
	data: null,
}

export const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_DATA_POST:
			return {
				...state,
				data: action.payload,
			}

		default:
			return state
	}
}
