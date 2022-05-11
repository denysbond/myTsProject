import classes from './CurrentUserPosts.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserPosts } from '../../../redux/reducers/getPostsReducer/getPostsThunk'
import { currentPosts } from '../../../redux/selectors'
import { Card } from '../../Card/Card'

export const CurrentUserPosts = () => {
	const dispatch = useDispatch()
	const currentUserPosts = useSelector(currentPosts)

	const user = JSON.parse(localStorage.getItem('user'))
	useEffect(() => {
		dispatch(getCurrentUserPosts(user._id))
	}, [])

	if (!currentUserPosts) return null

	return (
		<div className={classes.root}>
			{currentUserPosts.map((post) => {
				return (
					<Card
						posts={currentUserPosts}
						dispatch={dispatch}
						post={post}
						key={post._id}
					/>
				)
			})}
		</div>
	)
}
