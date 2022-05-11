import { PostsHeader } from './PostsHeader/PostsHeader'
import classes from './PostsPage.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../../redux/reducers/getPostsReducer/getPostsThunk'
import { allPosts } from '../../../redux/selectors'

import { Pagination } from '../../Pagination/Pagination'
import { TablePosts } from './TablePosts/TablePosts.tsx'
import { GridPosts } from './GridPosts/GridPosts.tsx'

export const PostsPage = () => {
	const dispatch = useDispatch()
	const [tablePosts, setTablePosts] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage, setPostsPerPage] = useState(10)

	useEffect(() => {
		dispatch(getAllPosts())
	}, [])
	const posts = useSelector(allPosts)
	console.log(posts)
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

	return (
		<div className={classes.root}>
			<PostsHeader posts={posts} setTablePosts={setTablePosts} />

			{tablePosts ? (
				<TablePosts
					currentPosts={currentPosts}
					dispatch={dispatch}
					posts={posts}
				/>
			) : (
				<GridPosts
					currentPosts={currentPosts}
					dispatch={dispatch}
					posts={posts}
				/>
			)}

			<Pagination
				postPerPage={postsPerPage}
				totalPosts={posts.length}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	)
}
