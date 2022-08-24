import {instance, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./api";
import {ResponseDataType} from "./api";


type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginLogoutResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return (
            instance.get<ResponseDataType<MeResponseDataType>>("/auth/me").then(res => res.data)
        )
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return (
            instance.post<ResponseDataType<LoginLogoutResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>("/auth/login", {
                email,
                password,
                rememberMe,
                captcha
            })
                .then(res => res.data)
        )
    },
    logout() {
        return (
            instance.delete<ResponseDataType<LoginLogoutResponseDataType>>("/auth/login").then(res => res.data)
        )
    }
}