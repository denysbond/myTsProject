import React from 'react'
import { GridCard } from './GridCard/GridCard'
import classes from './GridPosts.module.css'
import { IProps, Post } from '../TablePosts/TablePosts'

 

export const GridPosts = ({ currentPosts, posts }: IProps) => {
	return (
		<div className={classes.root}>
			{currentPosts.map((post:Post) => {
				return (
					<GridCard
						post={post}
						key={post._id}
						posts={posts}
					/>
				)
			})}
		</div>
	)
}
