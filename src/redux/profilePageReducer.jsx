import { ProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA_VALUE = "UPDATE-TEXTAREA-VALUE";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";

let initialState = {
    posts: [
        { postId: 0, postText: "New Message!" },
        { postId: 1, postText: "1" },
        { postId: 2, postText: " Message!" },
        { postId: 3, postText: "New 546gd!" },
        { postId: 4, postText: "23!" },
        { postId: 5, postText: "12321 Message!" },
        { postId: 6, postText: "New fsafse!" },
        { postId: 7, postText: "New Message!" },
        { postId: 8, postText: "sefeee Message!" },
        { postId: 9, postText: "New 32423!" },
    ],
    textareaValue: "",
    profile: null,
    isFetching: true,
    status: '',
};

let profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return ({
                ...state,
                posts: [...state.posts, {
                    postId: 5,
                    postText: state.textareaValue,
                }
                ],
                textareaValue: "",
            });
        case UPDATE_TEXTAREA_VALUE:
            return ({
                ...state,
                textareaValue: action.text,
            });
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case SET_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        small: action.photos.small,
                        large: action.photos.large
                    }
                },
            };
        default:
            return state;
    }
};

export const addPost = () => ({
    type: ADD_POST,
});
export const updateTextareaValue = (text) => ({
    type: UPDATE_TEXTAREA_VALUE,
    text: text,
});
export const setProfileAC = (profile) => ({
    type: SET_PROFILE,
    profile: profile,
});
export const togglePreloader = (isFetching) => ({
    type: TOGGLE_PRELOADER,
    isFetching,
});
export const setStatusAC = (status) => ({
    type: SET_STATUS,
    status,
});
export const setPhoto = (response) => ({
    type: SET_PHOTO,
    photos: response.data.photos,
});

export const setProfile = (userId) => {
    return (dispatch)=>{
        if(!userId){
            userId = 2;
        }
        dispatch(togglePreloader(true));
        ProfileAPI.getProfile(userId) 
            .then(result=>{  
                dispatch(setProfileAC(result));                
                dispatch(togglePreloader(false));
        });
    }
}

export const setStatus = (status) => {
    return (dispatch)=>{
        ProfileAPI.setStatus(status) 
            .then(result=>{
                dispatch(setStatusAC(status));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch)=>{
        dispatch(setStatusAC(status));
    }
}

export const queryStatus = (userId) => {
    return (dispatch)=>{
        ProfileAPI.getStatus(userId) 
            .then(result=>{
                
                dispatch(setStatusAC(result));
        });
    }
}
export const savePhoto = (file) => {    
    return async (dispatch)=>{
        let response = await ProfileAPI.setPhoto(file);                
        dispatch(setPhoto(response));
    }
}
export const saveProfile = (data) => { 
    return async (dispatch, getState)=>{
        const USER_ID = getState().auth.id;
        if(data.file.length){
            debugger;
            dispatch(savePhoto(data.file[0]));
        }
        let responseProfile = await ProfileAPI.setProfile(data, USER_ID); 
        dispatch(setProfile(USER_ID))
    }
}

export default profilePageReducer;
