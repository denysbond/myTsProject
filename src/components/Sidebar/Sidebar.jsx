import classes from './Sidebar.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const Sidebar = () => {
	const [activeIndex, setActiveIndex] = useState()
	const navigate = useNavigate()

	const handleClick = (index, path) => {
		setActiveIndex(index)
		navigate(path)
	}

	return (
		<div className={classes.root}>
			<ul className={classes.links}>
				{links.map((link, index) => {
					return (
						<li
							className={activeIndex === index ? classes.active : ''}
							onClick={() => handleClick(index, link.path)}
							key={link.path}
						>
							{link.name}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

const links = [
	{
		name: 'Головна сторінка',
		path: '/main',
	},
	{
		name: 'Сторінка з списком постів',
		path: '/posts',
	},
	{
		name: 'Сторінка з списком юзерів',
		path: '/users',
	},
	{
		name: 'Сторінка з постами юзера, який залоґіневся',
		path: '/user-posts',
	},
]
