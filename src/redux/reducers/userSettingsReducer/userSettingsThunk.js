const USERS_URL = 'https://finalprojectapi.magisoft.solutions/users/'
const UPLOAD_PROFILE_IMAGE_URL =
	'https://finalprojectapi.magisoft.solutions/users/uploadProfilePicture/'

export const updateUserData = (id, data) => {
	return async (dispatch) => {
		await fetch(`${USERS_URL}${id}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
	}
}

export const updateUserImage = (id, formData) => {
	return async (dispatch) => {
		await fetch(`${UPLOAD_PROFILE_IMAGE_URL}${id}`, {
			method: 'PATCH',
			credentials: 'include',

			body: formData,
		})
			.then((res) => res.json())
			.then((data) => console.log('image:', data))
	}
}
