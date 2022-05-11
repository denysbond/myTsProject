import { combineReducers } from 'redux'
import { registerReducer } from './registerReducer/registerReducer'
import { loginReducer } from './loginReducer/loginReducer'
import { getPosts } from './getPostsReducer/getPostsReducer'
import { userReducer } from './userReducer/userReducer'
import { modalReducer } from './modalReducer/modalReducer'

const rootReducer = combineReducers({
	registerReducer,
	loginReducer,
	getPosts,
	userReducer,
	modalReducer,
})

export default rootReducer
