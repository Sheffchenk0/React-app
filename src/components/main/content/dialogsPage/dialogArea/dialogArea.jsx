import React from "react";
import styles from './dialogArea.module.css';
import ChatInfo from "./chatInfo/chatInfo";
import Messages from "./messages/messages";
import InputPanel from "./inputPanel/InputPanel";

const DialogArea = (props) => {
    return (
        <div id="dialogArea" className={styles.dialogArea}>
            <ChatInfo />
            <Messages messages={props.state.messages[props.state.currentDialogId].messages}/>
            <InputPanel callbacks={props.callbacks} inputValue={props.state.inputValue}/>
        </div>
    );
};

export default DialogArea;