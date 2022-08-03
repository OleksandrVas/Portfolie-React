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
    unfollow(id = 1) {
        return (
            instance.post(`/follow/${id}`)
        )
    },
    follow(id = 1) {
        return (
            instance.delete(`/follow/${id}`)
        )
    },

}


export const profileApi = {
    getUserPage(userId) {
        return (
            instance.get(`/profile/${userId}`)
        )
    },
    getUserStatus(userId) {
        return (
            instance.get(`/profile/status/${userId}`)

        )
    },
    updateStatus(status) {
        return (
            instance.put(`/profile/status/`, {status: status})
        )
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('/profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveMyProfile(profile) {
        return instance.put(`/profile/`, profile)
    }

}

export const authAPI = {
    me() {
        return (
            instance.get("/auth/me")
        )
    },
    login(email, password, rememberMe = false , captcha ) {
        return (
            instance.post("/auth/login", {email, password, rememberMe , captcha })
        )
    },
    logout() {
        return (
            instance.delete("/auth/login")
        )
    }
}
////   Security
export const securityAPI = {
    getCaptchaUrl() {
        return(
            instance.get("/security/get-captcha-url")
        )
    }
}








