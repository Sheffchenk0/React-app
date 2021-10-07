import React from "react";
import styles from "./messages.module.css";
import Message from './message/message';

export default function messages(props) {
    let sorted = [...props.messages];
    sorted = sorted.reverse((a,b)=>a-b);
    let messages = sorted.map(element=>{
        return <Message key={element.messageId} message={element}/>    
    });
    return (
        <div className={styles.messages}>    
            {messages}
        </div>
    );
}
