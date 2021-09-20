import { Redirect } from "react-router";

const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA_VALUE = "UPDATE-TEXTAREA-VALUE";

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
};

let profilePageReducer = (state = initialState, action) => {    
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST:
            return({
                ...state,
                posts: [...state.posts, {
                    postId: 5,
                    postText: state.textareaValue,}
                ],
                textareaValue:"",
            });
        case UPDATE_TEXTAREA_VALUE:
            return({
                ...state,
                textareaValue: action.text,
            });
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST,
});
export const updateTextareaValueActionCreator = (text) => ({
    type: UPDATE_TEXTAREA_VALUE,
    text: text,
});

export default profilePageReducer;
