import {updateObjectInArray} from "../utils/object-helper";
import {PhotoType, UserType} from "../types/types";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {usersApi} from "../api/usersApi";



let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of users id
}

export type InitialState = typeof initialState
const userReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "IT/USERS/FOLLOW" :
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
        case "IT/USERS/UNFOLLOW" :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})

            }

        case "IT/USERS/SET_USERS" :
            return {
                ...state, users: action.users
            }
        case "IT/USERS/SET_CURRENT_PAGE" :
            return {
                ...state, currentPage: action.currentPage
            }
        case "IT/USERS/SET_TOTAL_USERS_COUNT" :
            return {
                ...state, totalUsersCount: action.count
            }
        case "IT/USERS/TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "IT/USERS/TOGGLE_IS_FOLLOWING_IN_PROGRESS" :
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


type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    follow: (userId: number) => ({type: "IT/USERS/FOLLOW", userId} as const),
    unFollow: (userId: number) => ({type: "IT/USERS/UNFOLLOW", userId} as const),
    setUsers: (users: Array<UserType>) => ({type: "IT/USERS/SET_USERS", users} as const),
    setCurrentPage: (currentPage: number) => ({type: "IT/USERS/SET_CURRENT_PAGE", currentPage} as const),
    setTotalUsersCount: (totalUserCount: number) => ({
        type: "IT/USERS/SET_TOTAL_USERS_COUNT",
        count: totalUserCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: "IT/USERS/TOGGLE_IS_FETCHING",
        isFetching
    } as const),

    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: "IT/USERS/TOGGLE_IS_FOLLOWING_IN_PROGRESS",
        isFetching,
        userId
    } as const)
}


type ThunkActionsType = BaseThunkType<ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkActionsType => async (dispatch, getState) => {
    // getState().
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))
    const data = await usersApi.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    // this.props.setTotalUsersCount(response.data.totalCount) убрал , чтобы было не так много страниц с пользователями
}


const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingInProgress(true, userId))
    const response = await apiMethod(userId);
    if (response.data.resultCode === 1) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId))
}


export const followUser = (userId: number): ThunkActionsType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), actions.unFollow)
}


export const unFollowUser = (userId: number): ThunkActionsType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), actions.follow)
}


export default userReducer