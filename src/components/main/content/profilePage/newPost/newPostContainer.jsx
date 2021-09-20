import React from "react";
import { addPostActionCreator, updateTextareaValueActionCreator } from "../../../../../redux/profilePageReducer";
import NewPost from "./newPost";
import {connect} from 'react-redux';

// export default function newPost(props) {
//   let addPost = () => {
//     let action = addPostActionCreator();
//     props.store.dispatch(action);
//   };
//   let updateTextareaValue = (text) => {
//     let action = updateTextareaValueActionCreator(text);
//     props.store.dispatch(action);
//   };
//   return (
//     <NewPost addPost={addPost} updateTextareaValue={updateTextareaValue} textareaValue={props.textareaValue} />
//   );
// }

let mapStateToProps = (state) => {
  return(
    {
      textareaValue: state.profilePage.textareaValue,
    }
  );

}
let mapDispatchToProps = (dispatch) => {
  return (
    {
      addPost: () => {
        dispatch(addPostActionCreator());
      },
      updateTextareaValue: (text) => {
        dispatch(updateTextareaValueActionCreator(text));
      }
    }
  );

}

let newPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost);
export default newPostContainer;