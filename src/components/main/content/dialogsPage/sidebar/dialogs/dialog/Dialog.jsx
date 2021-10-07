import React from "react";
import styles from "./dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    let onUpdateCurrentDialogId = ()=>{
        props.updateCurrentDialogId(props.dialog.userId);
    }
    return (
        <NavLink onClick={onUpdateCurrentDialogId} className={styles.dialog} activeClassName={styles.active} to={"/dialogs/" + props.dialog.userId}>
            <img
                src="https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg"
                alt=""
                srcSet=""
            />

            <div className={styles.info}>
                <div className={styles.fullname}>{props.dialog.fullname}</div>
                <div className={styles.lastMessage}>Lorem ipsum dolor sit.</div>
            </div>
        </NavLink>
    );
};
export default Dialog;