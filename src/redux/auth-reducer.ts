import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = "auth/SET_USER_DATA"
let SET_CAPTCHA_URL_SUCCESS = "auth/SET_CAPTCHA_URL_SUCCESS"



let initialState = {
    userId: null as number |null ,
    email: null as  string  |null ,
    login: null as  string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState , action: any) : InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case  SET_CAPTCHA_URL_SUCCESS : {
            return {
                ...state,
                userId : "Awdawd",
                ...action.payload
            }
        }
        default : {
            return state
        }
    }
}


type SetAuthUserDataActionPayloadType = {
    userId: number | null ,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

type setAuthUserDataPayloadType = {
    userId : number | null
    login : string | null
    email : string| null
    isAuth : boolean

}
type setAuthUserDataType = {
    type : typeof  SET_USER_DATA
    payload : setAuthUserDataPayloadType
}

export const setAuthUserData = (userId : number | null , login : string | null  , email : string | null, isAuth : boolean) : setAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})


type GetCaptchaUrlSuccessType = {
    type : typeof  SET_CAPTCHA_URL_SUCCESS
    payload : {captchaUrl : string}
}

export const getCaptchaUrlSuccess = (captchaUrl : string) : GetCaptchaUrlSuccessType  => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})


export const setUsers = () => async (dispatch: any) => {
    const response = await authAPI.me();

    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(setUsers())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }

        const message = response.data.messages.length > 0 ? response.data.messages[0] : "some error "
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captcha = response.data.url;
    dispatch(getCaptchaUrlSuccess(captcha))
}

export default authReducer





