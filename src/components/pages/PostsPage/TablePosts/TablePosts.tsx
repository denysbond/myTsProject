import React from 'react'
import classes from './TablePosts.module.css'
import { Card } from '../../../Card/Card'

export type AuthorOfPosts = {
	address: {
		_id:string
	}
	email:string
	name:string
	profileImg: null | string
	settings: {
		_id: string
	},
	_id: string
	content:string
	title: string
	__v:number
}

 export type Post = {
	author: AuthorOfPosts
	title: string
	content: string
	__v: number
	_id: string
}

export interface IProps {
	currentPosts:Array<Post> 
	posts: Array<Post>
	dispatch:() => void
}

export const TablePosts = ({ currentPosts, dispatch, posts }:IProps) => {
	
	return (
		<div className={classes.root}>
			{currentPosts.map((post:Post) => {
				return (
					<Card dispatch={dispatch} key={post._id} post={post} posts={posts} />
				)
			})}
		</div>
	)
}
