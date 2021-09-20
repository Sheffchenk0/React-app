import React from "react";
import styles from './dialogArea.module.css';
import ChatInfo from "./chatInfo/chatInfo";
import Messages from "./messages/messages";
import store from "../../../../../redux/redux-store";
import InputPanel from "./inputPanel/InputPanel";

export default (props) => {
    return (
        <div id="dialogArea" className={styles.dialogArea}>
            <ChatInfo />
            <Messages messages={props.state.messages[props.state.currentDialogId].messages}/>
            <InputPanel callbacks={props.callbacks} inputValue={props.state.inputValue}/>
        </div>
    );
};
