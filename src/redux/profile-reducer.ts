import {profileApi, ResultCodesEnum} from "../api/api";
import {NameOfUserType, PhotoType, PostDataType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";




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
        case "ADD_POST" : {
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
        case "SET_USER_PROFILE" : {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET_STATUS" : {
            return {
                ...state,
                status: action.status
            }
        }
        case "DELETE_POST" : {
            return {...state, postData: state.postData.filter(p => p.id !== action.postId)}
        }
        case "SAVE_PHOTO_SUCCESS" : {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }

        default : {
            return state
        }
    }
}


type ActionsTypes = InferActionsTypes<typeof actions>

const actions = {
     addPost : (postYourMessage: string) => ({type: "ADD_POST", postYourMessage}as const ),
     setUserProfile : (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile}as const ),
     setStatus : (status: string) => ({type: "SET_STATUS", status}as const ),
     deletePost : (postId: number) => ({type: "DELETE_POST", postId}as const ),
     savePhotoSuccess : (photos: PhotoType) => ({type: "SAVE_PHOTO_SUCCESS", photos}as const ),
}


type ThunkActionsTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>







export const getUsers = (userId: number) : ThunkActionsTypes => async (dispatch) => { // вернет промис
    const getUserProfile = await profileApi.getUserPage(userId)  // а дальше будет ждать пока выполниться //
    dispatch(actions.setUserProfile(getUserProfile))
}
export const getStatus = (userId: number) : ThunkActionsTypes => async (dispatch) => {
    const getUserData = await profileApi.getUserStatus(userId)
    dispatch(actions.setStatus(getUserData))


}
export const updateStatus = (status: string) : ThunkActionsTypes => async (dispatch ) => {
    try {
        const updateUserData = await profileApi.updateStatus(status)
        if (updateUserData.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setStatus(status))
        }
    } catch (error) {
        //
    }
}
export const savePhoto = (file: any) : ThunkActionsTypes => async (dispatch) => {
    const savePhotoData = await profileApi.savePhoto(file)
    if (savePhotoData.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(savePhotoData.data))
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