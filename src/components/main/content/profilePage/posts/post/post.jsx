import React from 'react';
import styles from './post.module.css';

export default function Posts(props){
    return (
        <div className={styles.post}>
            <div className={styles.image}>
                <img src="" alt=""/>
            </div>
            <div className={styles.content}>
                <div className={styles.text}>{props.text}</div>
            </div>
        </div>   
    )
}