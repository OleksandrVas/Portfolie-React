import { ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {authAPI} from "../api/authApi";
import {securityAPI} from "../api/securityApi";


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "IC/AUTH/SET_USER_DATA":
        case  "IC/AUTH/SET_CAPTCHA_URL_SUCCESS" : {
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




export const actions = {
    setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: "IC/AUTH/SET_USER_DATA",
        payload: {userId, login, email, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: "IC/AUTH/SET_CAPTCHA_URL_SUCCESS",
        payload: {captchaUrl}
    } as const)

}


type ThunkActionType = BaseThunkType<ActionsTypes>

export const setUsers = (): ThunkActionType => async (dispatch) => {
    const meData = await authAPI.me();

    if (meData.resultCode === ResultCodesEnum.Success) {
        const {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, login, email, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkActionType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(setUsers())
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptcha())
        }

        const message = loginData.messages.length > 0 ? loginData.messages[0] : "some error "
        // @ts-ignore
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): ThunkActionType => async (dispatch) => {
    const logoutData = await authAPI.logout();
    if (logoutData.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => async (dispatch) => {
    const getCaptchaData = await securityAPI.getCaptchaUrl();
    const captcha = getCaptchaData.url;
    dispatch(actions.getCaptchaUrlSuccess(captcha))
}

export default authReducer





