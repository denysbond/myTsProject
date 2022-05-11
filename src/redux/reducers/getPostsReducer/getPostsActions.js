import {
	CREATE_POST_REQUEST,
	FILTER_POSTS,
	GET_POSTS_REQUEST,
	CURRENT_USER_POSTS,
	SORT_POSTS,
} from '../../actionTypes/getPostsTypes'

export const getPostsRequest = (payload) => ({
	type: GET_POSTS_REQUEST,
	payload,
})

export const createPostRequest = (payload) => ({
	type: CREATE_POST_REQUEST,
	payload,
})

export const filterPosts = (payload) => ({
	type: FILTER_POSTS,
	payload,
})

export const currentUserPosts = (payload) => ({
	type: CURRENT_USER_POSTS,
	payload,
})

export const sortPosts = (payload) => ({
	type: SORT_POSTS,
	payload,
})
