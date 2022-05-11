import classes from './Card.module.css'
import updateLogo from '../../img/updatePost.svg'
import deleteLogo from '../../img/deletePost.svg'
import { openModal } from '../../redux/reducers/modalReducer/modalReducerActions'

export const Card = ({ post, dispatch, posts }) => {
	return (
		<div className={classes.root}>
			<div className={classes.title}>{post.title}</div>
			<div className={classes.content}>{post.content}</div>
			<div className={classes.user}>
				<img
					className={classes.postImg}
					src={post.author?.profileImg}
					alt='img'
				/>
				<span>{post.author?.name}</span>
			</div>
			<div className={classes.contentEnd}>
				<img
					onClick={() => dispatch(openModal('update', post._id, posts))}
					className={classes.img}
					src={updateLogo}
					alt='update'
				/>
				<img
					onClick={() => dispatch(openModal('delete', post._id, posts))}
					className={classes.img}
					src={deleteLogo}
					alt='delete'
				/>
			</div>
		</div>
	)
}
