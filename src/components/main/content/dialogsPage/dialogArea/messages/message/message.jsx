import React from 'react';
import styles from './message.module.css';

export default function message(props) {
    return(
        <div className={`${styles.message} ${styles.own}`}>
            <div className={styles.image}>
                <img
                    src="https://thumbs.dreamstime.com/b/animals-farm-imaga-cows-57225867.jpg"
                    alt=""
                />
            </div>
            <div id={styles.heart} className={styles.triangle}></div>
            <div className={styles.wrapper}>
                dawdwd awd awdaw dw
                <br />
                dwadawd
            </div>
        </div>   
    )
};
