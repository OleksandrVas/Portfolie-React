import {GetItemsType, instance, ResponseDataType, ResultCodesEnum} from "./api";


type FollowUnfollowResponseDataType = {
    userId: number
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
            instance.post<ResponseDataType<FollowUnfollowResponseDataType>>(`/follow/${id}`)
                .then(response => response.data.data)
        )
    },
    follow(id = 1) {
        return (
            instance.delete<ResponseDataType<FollowUnfollowResponseDataType>>(`/follow/${id}`)
                .then(response => response.data)
        )
    },
}