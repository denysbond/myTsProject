const apiUrl = 'https://finalprojectapi.magisoft.solutions/auth/login'
const authCheckUrl =
	'https://finalprojectapi.magisoft.solutions/auth/getLoggedInUserByCookie'

const logoutUrl = 'https://finalprojectapi.magisoft.solutions/auth/logout'

export const apiLogin = {
	loginRequest(values) {
		return fetch(`${apiUrl}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
	},

	authRequest() {
		return fetch(`${authCheckUrl}`, {
			method: 'GET',
			credentials: 'include',
		})
	},

	logoutRequest() {
		return fetch(`${logoutUrl}`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		})
	},
}
