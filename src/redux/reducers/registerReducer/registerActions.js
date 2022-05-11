import { REGISTER_DATA_POST } from '../../actionTypes/registerActionTypes'

export const actions = {
	registerPostData: (payload) => {
		return {
			type: REGISTER_DATA_POST,
			payload,
		}
	},
}
