import React from 'react';
import Pagintaion from '../../../../common/Pagination';
import User from './User.jsx/User';
import styles from './User.module.css';

let Users = (props) => {
    let users = props.state.users.map(user=>{
        return <User key={user.id} id={user.id} name={user.name} status={user.status} photos={user.photos} 
                followed={user.followed}
                setCurrentPage={props.setCurrentPage}
                follow={props.follow}
                setState={props.setState}
                togglePreloader={props.togglePreloader}
                unfollow={props.unfollow}
                isDisabled={props.state.disabled.some(id => id === user.id)}
                />
    });
    return (
        <div className={styles.users}>
            {users}
            <Pagintaion 
            pageSize={props.state.pageSize}
            pageBlockSize={props.state.pageBlockSize}
            currentPage={props.state.currentPage}
            totalUsersCount={props.state.totalUsersCount}
            setCurrentPage={props.setCurrentPage}
            />
        </div>
    );

};


export default Users;