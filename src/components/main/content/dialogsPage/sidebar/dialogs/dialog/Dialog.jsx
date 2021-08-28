import React from "react";
import styles from "./dialog.module.css";

export default (props) => {
    let active = '';
    console.log(props);
    if(props.isActive){
        active = ' ' + styles.active;
    }
    return (
        <div className={styles.dialog + active}>
            <img
                src="https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg"
                alt=""
                srcset=""
            />

            <div className={styles.info}>
                <div className={styles.fullname}>Nikita Shevchenko</div>
                <div className={styles.lastMessage}>Lorem ipsum dolor sit.</div>
            </div>
        </div>
    );
};
