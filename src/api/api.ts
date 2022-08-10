import axios from "axios";
import {PhotoType, ProfileType} from "../types/types";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "742902e9-bb3f-4afe-b5a5-3e9c57cec345"
    }
})

type User = {
    id: number
    name: string
    status: string
    photos: PhotoType
    followed: boolean,
}

type GetUsersType = {
    items: Array<User>
    totalCount: number,
    error: string
}
type FollowUnfollowUSer = {
    resultCode: ResultCodesEnum ,
    messages : Array<string>,
    data : {userId : number}
}

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (
            instance.get<GetUsersType>(`/users?page=${currentPage}&count=${pageSize}`, {})
                .then(response => response.data)
        )
    },
    unfollow(id = 1) {
        return (
            instance.post<FollowUnfollowUSer>(`/follow/${id}`)
        )
    },
    follow(id = 1) {
        return (
            instance.delete<FollowUnfollowUSer>(`/follow/${id}`)
        )
    },
}


type UpdateUserStatus = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: {}
}
type SavePhotoType = {
    data: PhotoType,
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
type SaveMyProfileType = {
    data: {},
    resultCode: ResultCodesEnum,
    messages: Array<string>
}


export const profileApi = {
    getUserPage(userId: number) {
        return (
            instance.get<ProfileType>(`/profile/${userId}`).then(res => res.data)
        )
    },
    getUserStatus(userId: number) {
        return (
            instance.get<string>(`/profile/status/${userId}`).then(res => res.data)

        )
    },
    updateStatus(status: string) {
        return (
            instance.put<UpdateUserStatus>(`/profile/status/`, {status: status}).then(res => res.data)
        )
    },
    savePhoto(photoFile: string) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<SavePhotoType>('/profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveMyProfile(profile: ProfileType) {
        return instance.put<SaveMyProfileType>(`/profile/`, profile)
    }

}


export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    },
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
type LoginResponseType = {
    resultCode: ResultCodesEnum | ResultCodeForCaptcha,
    messages: Array<string>,
    data: { userId: number },
}

type LogoutType = {
    data: { userId: number },
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

export const authAPI = {
    me() {
        return (
            instance.get<MeResponseType>("/auth/me").then(res => res.data)
        )
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return (
            instance.post<LoginResponseType>("/auth/login", {email, password, rememberMe, captcha})
                .then(res => res.data)
        )
    },
    logout() {
        return (
            instance.delete<LogoutType>("/auth/login").then(res => res.data)
        )
    }
}
////   Security
type GetCaptchaUrlType = {
    url: string
}


export const securityAPI = {
    getCaptchaUrl() {
        return (
            instance.get<GetCaptchaUrlType>("/security/get-captcha-url").then(res => res.data)
        )
    }
}








