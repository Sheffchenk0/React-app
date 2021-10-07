import React from 'react';
import Profile from './profile/profile'
import Posts from './posts/posts';
import styles from './profilePage.module.css';
import NewPost from './newPost/newPost';
import Preloader from '../../../common/Preloader';

export default function ProfilePage(props){
    return (
        <div className={styles.profilePage}>            
            {
                !props.profile ? 
                    <Preloader/> : 
                    <>
                        <Profile 
                        profile={props.profile}
                        status={props.status}
                        setStatus={props.setStatus}
                        updateStatus={props.updateStatus}
                        isOwner={props.isOwner}
                        savePhoto={props.savePhoto}                        
                        saveProfile={props.saveProfile}
                        />

                        <NewPost            
                        textareaValue={props.textareaValue}
                        addPost={props.addPost}
                        updateTextareaValue={props.updateTextareaValue}
                        togglePreloader={props.togglePreloader}
                        setState={props.setState}
                        />
                        <Posts posts={props.posts}/>
                    </>
            }

        </div>
    );
}