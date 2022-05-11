import { OPEN_MODAL, CLOSE_MODAL } from '../../actionTypes/modalActionTypes'

export const openModal = (payload, id, list) => ({
	type: OPEN_MODAL,
	payload,
	id,
	list,
})

export const closeModal = () => ({
	type: CLOSE_MODAL,
})
