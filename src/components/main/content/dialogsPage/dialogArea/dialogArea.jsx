import React from "react";
import styles from './dialogArea.module.css';
import ChatInfo from "./chatInfo/chatInfo";
import Messages from "./messages/messages";
import InputPanel from "./inputPanel/inputPanel";

export default (props) => {
    return (
        <div id="dialogArea" className={styles.dialogArea}>
            <ChatInfo />
            <Messages />
            <InputPanel />
        </div>
    );
};
