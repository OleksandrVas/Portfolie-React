import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";
import {PhotoType, UserType} from "../types/types";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE-IS-FOLLOWING-IN-PROGRESS"


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of users id
}

type InitialState = typeof initialState
const userReducer = (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                // users: [...state.users], Идентично  с ниже указанным

                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map(u => {
                //         if (u.id === action.userId) {
                //             return {...u, followed: true}
                //         }
                //         return u
                //     }
                // )
            }
        case UNFOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})

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

type FollowTypeActionType = {
    type: typeof FOLLOW,
    userId: number
}
export const follow = (userId: number): FollowTypeActionType => ({type: FOLLOW, userId});
type UnFollowTypeActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unFollow = (userId: number): UnFollowTypeActionType => ({type: UNFOLLOW, userId});
type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
export const setTotalUsersCount = (totalUserCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUserCount
})
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const data = await usersApi.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    // this.props.setTotalUsersCount(response.data.totalCount) убрал , чтобы было не так много страниц с пользователями
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    const response = await apiMethod(userId);
    if (response.data.resultCode === 1) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}
export const followUser = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), unFollow)
}
export const unFollowUser = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), follow)
}


export default userReducer