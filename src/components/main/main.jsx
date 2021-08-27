import React from 'react';
import styles from './main.module.css';
import Sidebar from './sidebar/sidebar';
import ProfilePage from './content/profilePage/profilePage';
import DialogsPage from './content/dialogsPage/dialogsPage'

export default function Main(){
    return(
    <div className={styles.main}>
        <Sidebar />
        {/* <ProfilePage/> */}
        <DialogsPage/>
    </div>
    );
}