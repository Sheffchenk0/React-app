import React, { PureComponent } from 'react';
import Profile from './profile/profile'
import NewPostContainer from './newPost/newPostContainer';
import Posts from './posts/posts';
import styles from './profilePage.module.css';
import NewPost from './newPost/newPost';

export default function ProfilePage(props){
    return (
        <div className={styles.profilePage}>
            <Profile />
            <NewPost callbacks={props.newPostCB} textareaValue={props.textareaValue}/>
            <Posts posts={props.posts}/>
        </div>
    );
}