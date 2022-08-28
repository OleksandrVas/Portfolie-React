import {GetItemsType, instance, ResponseDataType, ResultCodesEnum} from "./api";


export type FollowUnfollowResponseDataType = {
    userId: number,
    resultCode: ResultCodesEnum,
    data: {}
}


export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (
            instance.get<GetItemsType>(`/users?page=${currentPage}&count=${pageSize}`, {})
                .then(response => response.data)
        )
    },
    unfollow(id = 1) {
        return (
            instance.post<any>(`/unfollow/${id}`)
                .then(response => response.data)
        )
    },
    follow(id = 1) {
        return (
            instance.delete<any>(`/follow/${id}`)
                .then(response => response.data)
        )
    },
}