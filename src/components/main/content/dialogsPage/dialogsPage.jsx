import React from 'react';
import styles from './dialogsPage.module.css';
import DialogArea from './dialogArea/dialogArea';
import Sidebar from './sidebar/sidebar';
import { withAuthRedirect } from '../../../../hoc/RedirectAuth';
import { compose } from 'redux';

class DialogsPage extends React.Component{
    render(){
        return(
            <div className={styles.dialogsPage}>
                <Sidebar callbacks={this.props.sidebarCB} state={this.props.sidebar}/> 
                <DialogArea callbacks={this.props.dialogAreaCB} state={this.props.dialogArea}/>
            </div>
        );
    }
}

export default compose(
    withAuthRedirect
)(DialogsPage);