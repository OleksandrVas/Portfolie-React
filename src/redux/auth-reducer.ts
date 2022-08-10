import {authAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
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

export const setUsers = () : ThunkActionType => async (dispatch) => {
    const meData = await authAPI.me();

    if (meData.resultCode === ResultCodesEnum.Success  ) {
        const {id, login, email} = meData.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkActionType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(setUsers())
    } else {
        if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptcha())
        }

        const message = loginData.messages.length > 0 ? loginData.messages[0] : "some error "
        // @ts-ignore
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): ThunkActionType => async (dispatch) => {
    const deleteData = await authAPI.logout();
    if (deleteData.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => async (dispatch) => {
    const getCaptcha = await securityAPI.getCaptchaUrl();
    const captcha = getCaptcha.url;
    dispatch(getCaptchaUrlSuccess(captcha))
}

export default authReducer





