import React from 'react';
import ShowMoreButton from './ShowMoreButton/ShowMoreButton';
import styles from './UserPage.module.css';
import Users from './Users/Users';

class UsersPage extends React.Component {
    render() {
        return (
            <div className={styles.usersPage}>
                <Users callbacks={this.props.usersCB} state={this.props.usersState} />
                <ShowMoreButton />
            </div>
        )
    }
}

export default UsersPage;