import React from "react";
import styles from "./messages.module.css";
import Message from './message/message';

export default function messages(props) {
    return (
        <div className={styles.messages}>     
        <Message />              
        </div>
    );
}
