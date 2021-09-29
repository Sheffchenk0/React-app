import axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': 'de8477f7-9eb6-4c67-a023-a37f1bda63ff',
    },
});

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    getCurrentPage(id, pageSize){        
        return instance.get(`users?page=${id}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
};

export const ProfileAPI = {
    getProfile(userId){   
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getStatus(userId){   
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },
    setStatus(status){
        return instance.put(`profile/status/`, {status});
    },
}

export const AuthAPI = {
    auth(){
        return instance.get('auth/me')
        .then(response => response.data);
    },
    login(email, password, rememberMe){
        return instance.post('auth/login' , {
            email,
            password,
            rememberMe,
        })
        .then(response => response.data);
    },
    logout(){
        return instance.delete('auth/login')
        .then(response => response.data);
    }
}
