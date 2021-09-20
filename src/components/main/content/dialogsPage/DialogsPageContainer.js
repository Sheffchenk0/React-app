import React from 'react';
import { connect } from 'react-redux';
import { addMessageAC, updateCurrentDialogIdAC, updateInputValueAC, updateSearchDialogValueAC } from '../../../../redux/dialogsPageReducer';
import DialogsPage from './dialogsPage';

let mapStateToProps = (state) => {
    return {
        sidebar:{
            dialogs: state.dialogsPage.dialogs,
            searchDialogValue: state.dialogsPage.searchDialogValue,
        },
        dialogArea:{
            messages: state.dialogsPage.messages,
            inputValue: state.dialogsPage.inputValue,
            currentDialogId: state.dialogsPage.currentDialogId,
        },
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        sidebarCB: {
            updateCurrentDialogId: (id) => {
                dispatch(updateCurrentDialogIdAC(id));
            },
            updateSearchDialogValue: (text) => {
                dispatch(updateSearchDialogValueAC(text));
            },
        },
        dialogAreaCB: {
            addMessage: ()=>{
                dispatch(addMessageAC());
            },
            updateInputValue: (text)=>{
                dispatch(updateInputValueAC(text))
            },
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsPage);