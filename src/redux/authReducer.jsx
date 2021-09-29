import { Redirect } from "react-router";
import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_READY = "SET_READY";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isReady: false,
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return ({
                ...state,
                ...action.data,
            });
        case SET_READY:
            return ({
                ...state,
                isReady: true,
            });    
        default:
            return state;
    }
};

export const setUserData = (id, email, logi, isAuth) => ({
    type: SET_USER_DATA,
    data: {id,email,login,isAuth},
});
export const setReadyAC = () => ({
    type: SET_READY
});

export const login = () => {
    return (dispatch) => {        
        return AuthAPI.auth()
        .then(result=>{
            if(!result.resultCode){
                let {id, email, login} = result.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    };
}
export const auth = (email, password, rememberMe) => {
    return (dispatch) => {        
        return AuthAPI.login(email, password, rememberMe)
        .then(result=>{
            if(!result.resultCode){                
                dispatch(login());
            }
        });
    };
}
export const logout = () => {
    return (dispatch) => {        
        AuthAPI.logout()
        .then(result=>{
            if(!result.resultCode){                
                dispatch(setUserData(null, null, null, false));
            }
        });
    };
}

export const setReady = () => {
    return (dispatch) => {        
        dispatch(login())
        .then(result=>{
            dispatch(setReadyAC());
        });
    };
}

export default authReducer;
