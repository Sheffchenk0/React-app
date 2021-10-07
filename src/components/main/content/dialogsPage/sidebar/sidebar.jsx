import React from "react";
import styles from "./sidebar.module.css";
import Dialogs from "./dialogs/Dialogs";
import SeacrhPanel from "./searchPanel/SearchPanel";

const Sidebar = (props) => {
    return (
            <div className={styles.sidebar}>                
                <SeacrhPanel searchDialogValue={props.state.searchDialogValue} updateSearchDialogValue={props.callbacks.updateSearchDialogValue}/>
                <Dialogs searchDialogValue={props.state.searchDialogValue} dialogs={props.state.dialogs} updateCurrentDialogId={props.callbacks.updateCurrentDialogId}/>
            </div>
    );
};
export default Sidebar;