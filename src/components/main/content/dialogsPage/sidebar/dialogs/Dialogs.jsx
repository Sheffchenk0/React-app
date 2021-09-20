import React from "react";
import styles from "./dialogs.module.css";
import Dialog from './dialog/Dialog';

export default (props) => {
    let dialogsElements = [];
    props.dialogs.forEach(element => {
        let names = element.fullname.split(' ');
        let includes = false;
        if(element.fullname.indexOf(props.searchDialogValue.trim()) === 0){
            includes = true;
        }
        names.forEach(element => {
            if(element.indexOf(props.searchDialogValue.trim()) === 0){
                includes = true;
            }
        });    
        if(props.searchDialogValue==='' || includes){
            dialogsElements.push(<Dialog updateCurrentDialogId={props.updateCurrentDialogId} dialog={element}/>)
        }
    });
    return (
        <div className={styles.dialogs}>
        {dialogsElements}

        </div>
    );
};
