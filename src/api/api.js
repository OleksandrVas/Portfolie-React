import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "742902e9-bb3f-4afe-b5a5-3e9c57cec345"
    }
})


export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (
            instance.get(`/users?page=${currentPage}&count=${pageSize}`, {})
                .then(response => response.data)
        )
    },

}
export const unFollowApi = {
    unfollow(id = 1) {
        return (
            instance.post(`/follow/${id}`)
        )
    }
}
export const FollowApi = {
    follow(id = 1) {
        return (
            instance.delete(`/follow/${id}`)
        )
    },
}
export const authMeApi = {
    authMe() {
        return (
            instance.get("/auth/me")
        )
    },
}
export const getUserPageApi = {
    getUserPage(userId){
        return(
            instance.get(`/profile/${userId}`)
        )
    }
}








