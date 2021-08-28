import React from 'react';
import styles from './dialogsPage.module.css';
import DialogArea from './dialogArea/dialogArea';
import Sidebar from './sidebar/sidebar';

export default ()=>{
    return(
        <div className={styles.dialogsPage}>
            <Sidebar /> 
            <DialogArea />
        </div>

    );
}