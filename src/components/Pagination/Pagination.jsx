import classes from './Pagination.module.css'
import { useState } from 'react'

export const Pagination = ({ postPerPage, totalPosts, setCurrentPage }) => {
	const pageNumbers = []
	const [activeNumber, setActiveNumber] = useState(1)

	for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
		pageNumbers.push(i)
	}

	const handleClick = (number) => {
		setCurrentPage(number)
		setActiveNumber(number)
	}

	return (
		<div className={classes.root}>
			{pageNumbers.map((number) => {
				return (
					<span
						className={
							activeNumber === number ? classes.active : classes.number
						}
						onClick={() => handleClick(number)}
						key={number}
					>
						{number}
					</span>
				)
			})}
		</div>
	)
}
