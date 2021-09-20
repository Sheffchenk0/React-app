import React from 'react';
import styles from './dialogsPage.module.css';
import DialogArea from './dialogArea/dialogArea';
import Sidebar from './sidebar/sidebar';

export default (props)=>{
    return(
        <div className={styles.dialogsPage}>
            <Sidebar callbacks={props.sidebarCB} state={props.sidebar}/> 
            <DialogArea callbacks={props.dialogAreaCB} state={props.dialogArea}/>
        </div>

    );
}