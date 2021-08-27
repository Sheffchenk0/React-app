import React from 'react';
import Post from './post/post'
import styles from './posts.module.css';


export default function Posts(){
    return (
    <div className={styles.posts}>
        <Post message="Hi"/>
        <Post message="123"/>
        <Post message="lorem5"/>
    </div>
    )
}