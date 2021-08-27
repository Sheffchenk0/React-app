import React from "react";
import styles from './dialogArea.module.css';
import ChatInfo from "./chatInfo/chatInfo";
import Messages from "./messages/messages";

export default (props) => {
    return (
        <div id="dialogArea" className={styles.dialogArea}>
            <ChatInfo />
            <Messages />
            <div className={styles.inputPanel}>
                <div className={styles.attachments}></div>
                <textarea
                    rows="1"
                    className={styles.input}
                    placeholder="Write an message..."
                />
                <div className={styles.sendButton}>
                    <svg viewBox="0 0 512 512">
                        <path
                            d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808
L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193
c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409
C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
