import React, { PureComponent } from 'react';
import Profile from './profile/profile'
import NewPost from './newPost/newPost';
import Posts from './posts/posts';
import './profilePage.module.css';

export default function ProfilePage(){
    return (
        <div className="content">
            <Profile />
            <NewPost />
            <Posts />
        </div>
    );
}