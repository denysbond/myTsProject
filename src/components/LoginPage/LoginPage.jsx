import classes from './LoginPage.module.css'
import { Form, Field } from 'react-final-form'
import { sendLoginData } from '../../redux/reducers/loginReducer/loginReducerThunk'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isAuth } from '../../redux/selectors'

const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const auth = useSelector(isAuth)

	const onSubmit = async (values) => {
		await dispatch(sendLoginData(values))
		await navigate('/main')
	}

	return (
		<Form onSubmit={(values) => onSubmit(values)}>
			{(props) => (
				<form className={classes.form} onSubmit={props.handleSubmit}>
					<Field
						name='email'
						component='input'
						type='email'
						placeholder='email'
						className={classes.field}
					/>
					<Field
						name='password'
						component='input'
						type='password'
						placeholder='password'
						className={classes.field}
					/>

					<button className={classes.button} type='submit'>
						Login
					</button>
				</form>
			)}
		</Form>
	)
}

export default LoginPage
