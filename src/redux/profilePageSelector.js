export const getProfile = (state) => {
    return state.profilePage.profile;
}
export const getPosts = (state) => {
    return state.profilePage.posts;
}
export const getTextareaValue = (state) => {
    return state.profilePage.textareaValue;
}
export const getIsFetching = (state) => {
    return state.profilePage.isFetching;
}
export const getStatus = (state) => {
    return state.profilePage.status;
}
export const getAuthUserId = (state) => {
    return state.auth.id;
}