import './index.css'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/Navbar/NavBar'
import { useSelector, useDispatch } from 'react-redux'
import { isAuth, loginRequest } from './redux/selectors'
import { useEffect } from 'react'
import { authCheck } from './redux/reducers/loginReducer/loginReducerThunk'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import { MainSection } from './components/MainSection/MainSection.tsx'
import { NotFound } from './NotFound/NotFound'
import { Sidebar } from './components/Sidebar/Sidebar'
import { PostsPage } from './components/pages/PostsPage/PostsPage'
import { UserPage } from './components/pages/UserPage/UserPage'
import { CurrentUserPosts } from './components/pages/CurrentUserPosts/CurrentUserPosts'
import { SettingsPage } from './components/pages/SettingsPage/SettingsPage'
import { ModalWindow } from './components/ModalWindow/ModalWindow'

function App() {
	const data = useSelector(loginRequest)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(authCheck())
	}, [data])

	const auth = useSelector(isAuth)
	return (
		<div style={{ position: 'relative' }} className='App'>
			<NavBar />
			<div style={{ display: 'flex' }}>
				{auth && <Sidebar />}
				<Routes>
					{!auth && (
						<>
							<Route path='/register' element={<RegisterPage />} exact />
							<Route path='/login' element={<LoginPage />} exact />
						</>
					)}

					{auth && (
						<>
							<Route path='/main' element={<MainSection />} exact />
							<Route path='/posts' element={<PostsPage />} exact />
							<Route path='/users' element={<UserPage />} exact />
							<Route path='/user-posts' element={<CurrentUserPosts />} exact />
							<Route path='/user-settings' element={<SettingsPage />} exact />
							<Route path='*' element={<NotFound />} exact />
						</>
					)}
				</Routes>
				{auth && <ModalWindow />}
			</div>
		</div>
	)
}

export default App
