import { apiRegister } from '../../../api/apiRegister'
import { actions } from './registerActions'

export const sendRegisterData = (data) => {
	return async (dispatch) => {
		await apiRegister
			.postData(data)
			.then((res) => res.json())
			.then((data) => dispatch(actions.registerPostData(data)))
	}
}
