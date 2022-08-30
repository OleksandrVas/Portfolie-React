import {updateObjectInArray} from "../utils/object-helper";
import {PhotoType, UserType} from "../types/types";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {FollowUnfollowResponseDataType, usersApi} from "../api/usersApi";
import {ResponseDataType} from "../api/api";


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    filter : {
        term : "",
        friend : null as null | boolean
    } ,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of users id
}


export const userReducer = (state = initialState, action: ActionsTypes): InitialState => {
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
        case "IT/USERS/SET_TERM":{
            return {
                ...state ,
            filter: action.payload
            }
        }
        default :
            return state


    }
}




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
    } as const),
    setFilter : (filter : FilterType ) => ({
        type : "IT/USERS/SET_TERM",
        payload : filter
    } as const)
}


type ThunkActionsType = BaseThunkType<ActionsTypes>

export const requestUsers = (page: number, pageSize: number , filter : FilterType): ThunkActionsType => async (dispatch, getState) => {
    // getState().
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))
    dispatch(actions.setFilter(filter))
    const data = await usersApi.getUsers(page, pageSize , filter.term , filter.friend);
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    // this.props.setTotalUsersCount(response.data.totalCount) убрал , чтобы было не так много страниц с пользователями
}


const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: (userId : number) => Promise<FollowUnfollowResponseDataType>, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingInProgress(true, userId))


    let response = await apiMethod(userId);

    if (response == null) {//problem with api ?
        dispatch(actionCreator(userId))
    }

    dispatch(actions.toggleFollowingInProgress(false, userId))
}


export const followUser = (userId: number): ThunkActionsType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), actions.unFollow)
    }
}


export const unFollowUser = (userId: number): ThunkActionsType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), actions.follow)
}


export default userReducer

type ActionsTypes = InferActionsTypes<typeof actions>
export type InitialState = typeof initialState
export type FilterType = typeof initialState.filter