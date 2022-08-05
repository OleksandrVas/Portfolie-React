import {profileApi} from "../api/api";
import {NameOfUserType, PhotoType, PostDataType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    nameOfUser:
        {
            id: 0,
            name: "Oleksandr",
            birthday: "I was born in 12 October",
            position: "Urk poltava",
            job: "I'm Web Developer"
        } as NameOfUserType
    ,
    postData: [
        {message: "How are you ", id: 1, likesCount: 22},
        {message: "it's my first post ", id: 2, likesCount: 200},
        {message: "it's my second post  ", id: 3, likesCount: 183},
    ] as Array<PostDataType>,

    profile: null as ProfileType | null,
    status: "" as string | null
};
export type InitialStateType = typeof initialState


const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                message: action.postYourMessage,
                id: 4,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            }
        }
        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST : {
            return {...state, postData: state.postData.filter(p => p.id !== action.postId)}
        }
        case SAVE_PHOTO_SUCCESS : {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }

        default : {
            return state
        }
    }
}


type ActionsTypes =
    AddPostActionType
    | ProfileActionType
    | SetStatusActionType
    | DeletePostActionType
    | SavePhotoSuccessActionType

type AddPostActionType = {
    type: typeof ADD_POST,
    postYourMessage: string
}
type ProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotoType
}

type ThunkActionsTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const addPost = (postYourMessage: string): AddPostActionType => ({type: ADD_POST, postYourMessage})
export const setUserProfile = (profile: ProfileType): ProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos: PhotoType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})




export const getUsers = (userId: number) : ThunkActionsTypes => async (dispatch) => { // вернет промис
    const response = await profileApi.getUserPage(userId)  // а дальше будет ждать пока выполниться //
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) : ThunkActionsTypes => async (dispatch) => {
    const response = await profileApi.getUserStatus(userId)
    dispatch(setStatus(response.data))


}
export const updateStatus = (status: string) : ThunkActionsTypes => async (dispatch ) => {
    try {
        const response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        //
    }
}
export const savePhoto = (file: HTMLImageElement) : ThunkActionsTypes => async (dispatch) => {
    const response = await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) : ThunkActionsTypes => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileApi.saveMyProfile(profile)
    if (response.data.resultCode === 0 ) {
        if ( userId !== null){
            dispatch(getStatus(userId))
        }
    }
}


export default profileReducer;