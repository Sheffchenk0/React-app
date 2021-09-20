const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_STATE = "SET_STATE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 6,
    currentPage: 7,
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
export const setStateAC = (users, count) => ({
    type: SET_STATE,
    users: users,
    totalUsersCount: count,
});
export const setCurrentPageAC = (id) => ({
    type: SET_CURRENT_PAGE,
    id: id,
});
export default usersPageReducer;
