import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateTextareaValueActionCreator } from '../../../../redux/profilePageReducer';
import ProfilePage from './profilePage';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textareaValue: state.profilePage.textareaValue,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        newPostCB: {
            addPost: () => {
                dispatch(addPostActionCreator());
            },
            updateTextareaValue: (text) => {
                dispatch(updateTextareaValueActionCreator(text));
            },
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);