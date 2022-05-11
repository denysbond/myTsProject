import {
	CREATE_POST_REQUEST,
	FILTER_POSTS,
	GET_POSTS_REQUEST,
	CURRENT_USER_POSTS,
	SORT_POSTS,
} from '../../actionTypes/getPostsTypes'

const initialState = {
	posts: [],
	post: null,
	filteredPosts: [],
	currentUserPosts: [],
}

export const getPosts = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS_REQUEST:
			return {
				...state,
				posts: action.payload,
			}
		case CREATE_POST_REQUEST:
			return {
				...state,
				post: action.payload,
				posts: [...state.posts, action.payload],
			}
		case FILTER_POSTS:
			return {
				...state,
				filteredPosts: action.payload,
			}
		case CURRENT_USER_POSTS:
			return {
				...state,
				currentUserPosts: action.payload,
			}
		case SORT_POSTS:
			return {
				...state,
				posts: action.payload,
			}
		default:
			return state
	}
}
