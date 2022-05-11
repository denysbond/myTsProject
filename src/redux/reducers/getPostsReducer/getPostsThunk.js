import {
	createPostRequest,
	currentUserPosts,
	getPostsRequest,
	sortPosts,
} from './getPostsActions'

export const getAllPosts = () => {
	return async (dispatch) => {
		return fetch('https://finalprojectapi.magisoft.solutions/posts', {
			method: 'GET',
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => dispatch(getPostsRequest(data.results)))
	}
}

export const createPost = (values) => {
	return async (dispatch) => {
		return fetch('https://finalprojectapi.magisoft.solutions/posts/', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
			.then((res) => res.json())
			.then((data) => dispatch(createPostRequest(data)))
	}
}

export const deletePost = (_id, posts) => {
	return async (dispatch) => {
		return fetch('https://finalprojectapi.magisoft.solutions/posts/' + _id, {
			method: 'DELETE',
			credentials: 'include',
		})
			.then((res) => console.log(res.status))
			.then(() =>
				dispatch(getPostsRequest(posts.filter((post) => post._id !== _id)))
			)
	}
}

export const updatePost = (values, _id, posts) => {
	return async (dispatch) => {
		return fetch('https://finalprojectapi.magisoft.solutions/posts/' + _id, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		}).then(() =>
			dispatch(
				getPostsRequest(
					posts.map((post) => {
						if (post._id === _id) {
							return Object.assign(post, {
								title: values.title,
								content: values.content,
							})
						}
						return post
					})
				)
			)
		)
	}
}

export const getCurrentUserPosts = (_id) => {
	return async (dispatch) => {
		return fetch(
			`https://finalprojectapi.magisoft.solutions/users/${_id}/posts`,
			{
				origin: 'http://localhost:3000',
				method: 'GET',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
			.then((res) => res.json())
			.then((data) => dispatch(currentUserPosts(data.results)))
	}
}

export const sortPostsRequest = (type) => {
	return async (dispatch) => {
		return fetch('https://finalprojectapi.magisoft.solutions/posts', {
			method: 'GET',
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				if (type === 'title') {
					dispatch(
						sortPosts(
							data.results.sort(function (a, b) {
								if (a.title > b.title) {
									return 1
								}
								if (a.title < b.title) {
									return -1
								}
								return 0
							})
						)
					)
				}
				if (type === 'name') {
					dispatch(
						sortPosts(
							data.results.sort(function (a, b) {
								if (a.author.name > b.author.name) {
									return 1
								}
								if (a.author.name < b.author.name) {
									return -1
								}
								return 0
							})
						)
					)
				}
			})
	}
}
