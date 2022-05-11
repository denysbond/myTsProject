import classes from './UserPage.module.css'
import Logo from '../../../img/Vector.svg'
import LogoTable from '../../../img/table.svg'
import LogoBlock from '../../../img/blocks.svg'
import { useState, useEffect } from 'react'
import { getAllUsers } from '../../../redux/reducers/userReducer/userThunk'
import { useDispatch, useSelector } from 'react-redux'
import { allUsers } from '../../../redux/selectors'
import { UserCard } from './UserCard/UserCard'
import { Pagination } from '../../Pagination/Pagination'

export const UserPage = () => {
	const [value, setValue] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [usersPerPage, setUserPerPage] = useState(10)
	const dispatch = useDispatch()
	const users = useSelector(allUsers)

	useEffect(() => {
		dispatch(getAllUsers())
	}, [])
	const indeOfLastPage = currentPage * usersPerPage
	const indexOfFirstPage = indeOfLastPage - usersPerPage

	if (!users) return null

	const filteredUsers = users.filter((user) =>
		user.name.toLowerCase().includes(value.toLowerCase())
	)

	const currentUsers = filteredUsers.slice(indexOfFirstPage, indeOfLastPage)

	return (
		<div className={classes.root}>
			<div className={classes.header}>
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
				<div className={classes.contentBlockUser}>
					<img src={LogoTable} alt='table' />
					<img src={LogoBlock} alt='blocks' />
				</div>
			</div>

			{currentUsers.map((user) => {
				return <UserCard users={users} user={user} key={user._id} />
			})}

			<Pagination
				postPerPage={usersPerPage}
				totalPosts={users.length}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	)
}
