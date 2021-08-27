import React from 'react';
import styles from './newPost.module.css';
export default function newPost(){
    return (
    <div className={styles.newPost}>
        <div className={styles.title}>New post</div>
        <div className={styles.form}>
            <textarea rows="1" className={styles.textarea}/>
            <button className={`${styles.button} ${styles.btn}`}>Send</button>
        </div>
    </div>
    )
}