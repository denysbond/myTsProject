export const loginRequest = (state) => state.loginReducer.user
export const isAuth = (state) => state.loginReducer.isAuth
export const registerData = (state) => state.registerReducer.data
export const allPosts = (state) => state.getPosts.posts
export const getPost = (state) => state.getPosts.post
export const filteredPosts = (state) => state.getPosts.filteredPosts
export const allUsers = (state) => state.userReducer.users
export const currentPosts = (state) => state.getPosts.currentUserPosts
export const modalOpen = (state) => state.modalReducer.isOpen
export const modalType = (state) => state.modalReducer.type
export const modalId = (state) => state.modalReducer.id
export const modalList = (state) => state.modalReducer.list
