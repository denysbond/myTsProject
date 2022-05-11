import classes from './PostsHeader.module.css'
import Logo from '../../../../img/Vector.svg'
import LogoTable from '../../../../img/table.svg'
import LogoBlock from '../../../../img/blocks.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../../redux/reducers/modalReducer/modalReducerActions'
import { sortPostsRequest } from '../../../../redux/reducers/getPostsReducer/getPostsThunk'

export const PostsHeader = ({ setTablePosts }) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')

	const handleTitleSelect = (e) => {
		dispatch(sortPostsRequest(e.target.value))
	}

	return (
		<div className={classes.root}>
			<span
				style={{ cursor: 'pointer' }}
				onClick={() => dispatch(openModal('create'))}
			>
				+ Створити пост
			</span>
			<div className={classes.inputBlock}>
				<input
					onChange={(e) => setValue(e.target.value)}
					value={value}
					className={classes.input}
					type='text'
					placeholder='Пошук'
				/>
				<img className={classes.searchLogo} src={Logo} alt='search' />
			</div>
			<select onChange={(e) => handleTitleSelect(e)} id='filter'>
				<option selected disabled hidden>
					Filter
				</option>
				<option value='title'>title</option>
				<option value='name'>name</option>
			</select>
			<div className={classes.contentBlock}>
				<img onClick={() => setTablePosts(true)} src={LogoTable} alt='table' />
				<img
					onClick={() => setTablePosts(false)}
					src={LogoBlock}
					alt='blocks'
				/>
			</div>
		</div>
	)
}
