import { OPEN_MODAL, CLOSE_MODAL } from '../../actionTypes/modalActionTypes'

const initialState = {
	isOpen: false,
	type: '',
	id: null,
	list: [],
}

export const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				isOpen: true,
				type: action.payload,
				id: action.id,
				list: action.list,
			}
		case CLOSE_MODAL:
			return {
				...state,
				isOpen: false,
			}
		default:
			return state
	}
}
