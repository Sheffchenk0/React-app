import { UsersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_STATE = "SET_STATE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
const TOGGLE_DISABLED = "IS_DISABLED";

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 6,
    currentPage: 1,
    isFetching: false,
    disabled: [],
};

let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.id) {
                            return {...user, followed : true};
                        }
                        return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.id) {
                            return {...user, followed : false};
                        }
                        return user;
                }),
            };
        case SET_STATE:
            return {
                ...state,
                users: [...action.users],
                totalUsersCount: action.totalUsersCount,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.id,
            };
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_DISABLED:
            return {
                ...state,
                disabled: action.isFetching ?
                    [...state.disabled, action.id] :
                    state.disabled.filter(id=> id !== action.id),
            };
        default:
            return state
    }
};

export const followAC = (id) => ({
    type: FOLLOW,
    id: id,
});
export const unfollowAC = (id) => ({
    type: UNFOLLOW,
    id: id,
});
export const setState = (users, count) => ({
    type: SET_STATE,
    users: users,
    totalUsersCount: count,
});
export const setCurrentPage = (id) => ({
    type: SET_CURRENT_PAGE,
    id: id,
});
export const togglePreloader = (isFetching) => ({
    type: TOGGLE_PRELOADER,
    isFetching,
});
export const toggleDisabled = (id, isFetching) => ({
    type: TOGGLE_DISABLED,
    isFetching,
    id,
});
export const getPage = (pageId, pageSize) => {
    return (dispatch)=>{  
        dispatch(togglePreloader(true));
        dispatch(setCurrentPage(pageId));
        UsersAPI.getUsers(pageId, pageSize)
        .then(result=>{
            dispatch(setState(result.items, result.totalCount));                
            dispatch(togglePreloader(false));
        });
    };
};
export const follow = (id) => {
    return (dispatch)=>{  
        dispatch(toggleDisabled(id,true));
        UsersAPI.follow(id)
        .then(result=>{
            if(!result.resultCode){
                dispatch(followAC(id));
                dispatch(toggleDisabled(id,false));
            }
        });
    };
};
export const unfollow = (id) => {
    return (dispatch)=>{  
        dispatch(toggleDisabled(id,true));
        UsersAPI.unfollow(id)
        .then(result=>{
            if(!result.resultCode){
                dispatch(unfollowAC(id));
                dispatch(toggleDisabled(id,false));
            }
        });
    };
};

export default usersPageReducer;
