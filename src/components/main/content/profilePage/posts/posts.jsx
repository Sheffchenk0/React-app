import React from 'react';
import Post from './post/post'
import styles from './posts.module.css';

export default React.memo(function Posts(props) {
    let posts = props.posts.map(element=>{
        return <Post key={element.postId} id={element.postId} text={element.postText} />
    });
    return (
    <div className={styles.posts}>
        {posts}
    </div>
    )
})