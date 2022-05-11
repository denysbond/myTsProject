import classes from './RegisterPage.module.css'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { sendRegisterData } from '../../redux/reducers/registerReducer/registerReducerThunk'
import { useNavigate } from 'react-router'
import { registerData } from '../../redux/selectors'

const RegisterPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const data = useSelector(registerData)
	console.log(data)

	const onSubmit = (values) => {
		console.log(values)
		dispatch(sendRegisterData(values))
		if (data) {
			navigate('/login')
		}
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
					<Field
						name='name'
						component='input'
						type='text'
						placeholder='name'
						className={classes.field}
					/>
					<Field
						name='city'
						component='input'
						type='text'
						placeholder='city'
						className={classes.field}
					/>
					<Field
						name='street'
						component='input'
						type='street'
						placeholder='street'
						className={classes.field}
					/>
					<button className={classes.button} type='submit'>
						Submit
					</button>
				</form>
			)}
		</Form>
	)
}

export default RegisterPage
