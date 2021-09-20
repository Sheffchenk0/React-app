import React from 'react';
import styles from './message.module.css';

export default function message(props) {
    let owner = '';
    if(props.message.isOwn == 1){
        owner = ' ' + styles.own;
    }
    return(
        <div className={styles.message + owner}>
            <div className={styles.image}>
                <img
                    src="https://thumbs.dreamstime.com/b/animals-farm-imaga-cows-57225867.jpg"
                    alt=""
                />
            </div>
            {/* <div id={styles.heart} className={styles.triangle}></div> */}
            <div className={styles.wrapper}>
                {props.message.messageText}
            </div>
        </div>   
    )
};
