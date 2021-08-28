import React from "react";
import styles from "./sidebar.module.css";
import SeacrhPanel from "./searchPanel/seacrhPanel";
import Dialogs from "./dialogs/Dialogs";

export default (props) => {
    return (
        <div className={styles.sidebar}>
            <SeacrhPanel /> 
            <Dialogs />           
        </div>
    );
};
