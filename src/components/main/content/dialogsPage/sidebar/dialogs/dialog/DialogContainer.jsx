import React from "react";
import { connect } from "react-redux";
import { updateCurrentDialogIdActionCreator } from "../../../../../../../redux/dialogsPageReducer";
import Dialog from "./Dialog";

// let mapStateToProps = (state)=> {
//     return(
//         {
//             dialog: state.dialogsPage.dialogs[state.dialogsPage.currentDialogId],
//         }
//     );
// };

// let mapDispatchToProps = (dispatch)=>{
//     return(
//         {
//             updateCurrentDialogId: (id) => {
//                 dispatch(updateCurrentDialogIdActionCreator(id));
//             },
//         }
//     );
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Dialog);


export default (props) => {
    let updateCurrentDialogId = ()=>{
        let id = props.dialog.userId;
        let action = updateCurrentDialogIdActionCreator(id);
        props.store.dispatch(action);
    }
    return (
        <Dialog dialog={props.dialog} updateCurrentDialogId={updateCurrentDialogId}/>
    );
};
