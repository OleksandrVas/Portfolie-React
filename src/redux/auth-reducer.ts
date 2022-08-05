import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

let SET_USER_DATA = "auth/SET_USER_DATA"
let SET_CAPTCHA_URL_SUCCESS = "auth/SET_CAPTCHA_URL_SUCCESS"


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case  SET_CAPTCHA_URL_SUCCESS : {
            return {
                ...state,
                userId: 12,
                ...action.payload
            }
        }
        default : {
            return state
        }
    }
}

type ActionsTypes = SetAuthUserDataType | GetCaptchaUrlSuccessType


type setAuthUserDataPayloadType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean

}
type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataPayloadType
}

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})


type GetCaptchaUrlSuccessType = {
    type: typeof SET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})


type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const setUsers = (): ThunkActionType => async (dispatch) => {
    const response = await authAPI.me();

    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkActionType => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(setUsers())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }

        const message = response.data.messages.length > 0 ? response.data.messages[0] : "some error "
        // @ts-ignore
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): ThunkActionType => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captcha = response.data.url;
    dispatch(getCaptchaUrlSuccess(captcha))
}

export default authReducer





