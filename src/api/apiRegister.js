const apiUrl = 'https://finalprojectapi.magisoft.solutions/auth/register'

export const apiRegister = {
	postData(values) {
		return fetch(`${apiUrl}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
	},
}
