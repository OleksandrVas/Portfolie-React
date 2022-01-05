import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE-IS-FOLLOWING-IN-PROGRESS"


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: {},
    followingInProgress: []
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                // users: [...state.users], Идентично  с ниже указанным
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }
        case UNFOLLOW :
            return {
                ...state,
                // users: [...state.users], Идентично  с ниже указанным
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }

        case SET_USERS :
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE :
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT :
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        default :
            return state


    }
}
export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUserCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUserCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersApi.getUsers(page, pageSize)
            .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            // this.props.setTotalUsersCount(response.data.totalCount) убрал , чтобы было не так много сттаниц с пользователями
        })
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersApi.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 1) {
                    dispatch(unFollow(userId))
                }
                dispatch(toggleFollowingInProgress(false , userId))
            })
    }
}
export const unFollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersApi.unfollow(userId)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(follow(userId))
                    }
                    dispatch(toggleFollowingInProgress(false , userId))
                }

            )
    }
}


export default userReducer