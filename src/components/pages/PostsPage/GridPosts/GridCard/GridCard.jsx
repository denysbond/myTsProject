import React from 'react'
import classes from './GridCard.module.css'

export const GridCard = ({ post, posts }) => {
	return (
		<div className={classes.root}>
			<img className={classes.photo} src={post.author?.profileImg} alt='img' />
			<div>{post.title}</div>
			<div>{post.content}</div>
		</div>
	)
}
