import {authAPI, securityAPI, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = "auth/SET_USER_DATA"
let SET_CAPTCHA_URL_SUCCESS = "auth/SET_CAPTCHA_URL_SUCCESS"
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case  SET_CAPTCHA_URL_SUCCESS : {
            return {
                ...state,
                ...action.payload
            }
        }
        default : {
            return state
        }
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const setUsers = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email, password, rememberMe , captcha ) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe , captcha );
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
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captcha = response.data.url;
    dispatch(getCaptchaUrlSuccess(captcha))
}

export default authReducer





