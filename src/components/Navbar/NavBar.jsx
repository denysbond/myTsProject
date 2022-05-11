import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { isAuth } from '../../redux/selectors'
import Logo from '../../img/user.png'
import Logo2 from '../../img/settings.png'
import { useNavigate } from 'react-router-dom'
import { logoutRequest } from '../../redux/reducers/loginReducer/loginReducerThunk'

export const NavBar = () => {
	const auth = useSelector(isAuth)
	const user = JSON.parse(localStorage.getItem('user'))
	let navigate = useNavigate()
	const dispatch = useDispatch()

	const logout = async () => {
		await dispatch(logoutRequest())
		await navigate('/login')
	}

	return (
		<div className={classes.root}>
			<div className={classes.heading}>Final Project</div>
			<div className={classes.contentBlock}>
				{auth ? (
					<>
						<span>{user.name}</span>
						<img
							onClick={() => navigate('/user-settings')}
							style={{ cursor: 'pointer' }}
							src={Logo}
							alt='logo'
						/>
						<img src={Logo2} alt='logo2' />
						<button onClick={logout}>logout</button>
					</>
				) : (
					<>
						<Link to='/register'>Register Page</Link> \
						<Link to='/login'>Login Page</Link>
					</>
				)}
			</div>
		</div>
	)
}
