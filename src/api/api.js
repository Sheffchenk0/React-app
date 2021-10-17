import axios from 'axios';
let instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0edfcba0-783f-458f-bf9f-9ac3e936de1e',
  },
});

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getCurrentPage(id, pageSize) {
    return instance.get(`users?page=${id}&count=${pageSize}`).then((response) => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const ProfileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId).then((response) => response.data);
  },
  setStatus(status) {
    return instance.put(`profile/status/`, { status });
  },
  setPhoto(file) {
    let formData = new FormData();
    formData.append('image', file);
    return instance.put(`profile/photo/`, formData).then((response) => response.data);
  },
  setProfile(data, userId) {
    const formatData = {
      userId,
      fullName: data.fullname,
      lookingForAJob: data.lookingForAJob || false,
      lookingForAJobDescription: data.lookingForAJobDescription || null,
      contacts: {
        github: null,
        vk: null,
        facebook: null,
        instagram: null,
        twitter: null,
        website: null,
        youtube: null,
        mainLink: null,
      },
      aboutMe: 'nikita',
    };
    debugger;
    return instance.put(`profile/`, formatData).then((response) => {
      console.log(response);
      return response.data;
    });
  },
};

export const AuthAPI = {
  auth() {
    return instance.get('auth/me').then((response) => response.data);
  },
  login(email, password, rememberMe) {
    return instance
      .post('auth/login', {
        email,
        password,
        rememberMe,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete('auth/login').then((response) => response.data);
  },
};
