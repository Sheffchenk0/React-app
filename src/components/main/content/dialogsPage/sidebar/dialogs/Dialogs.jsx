import React from "react";
import styles from "./dialogs.module.css";
import Dialog from './dialog/Dialog';

const Dialogs = (props) => {
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
            dialogsElements.push(<Dialog key={element.userId} updateCurrentDialogId={props.updateCurrentDialogId} dialog={element}/>)
        }
    });
    return (
        <div className={styles.dialogs}>
        {dialogsElements}

        </div>
    );
};
export default Dialogs;