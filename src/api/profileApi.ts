import {PhotoType, ProfileType} from "../types/types";
import {instance, ResponseDataType} from "./api";


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
            instance.put<ResponseDataType>(`/profile/status/`, {status: status}).then(res => res.data)
        )
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<ResponseDataType<PhotoType>>('/profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveMyProfile(profile: ProfileType) {
        return instance.put<ResponseDataType>(`/profile/`, profile).then(res => res.data)
    }

}