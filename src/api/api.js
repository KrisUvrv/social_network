import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "7c8ec843-bef1-4af2-ad5c-c3d5bf4323bb"},
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
      return instance.post(`follow/${userId}`).then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    },
};

export const profileAPI = {

    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login() {
        return instance.post(`auth/login`).then(response => response.data);
    }
}

