import React from 'react';
import User from './User.jsx/User';
import styles from './User.module.css';

let Users = (props) => {
    let setCurrentPage = (event)=>{
        props.setCurrentPage(event.target.dataset.id);
    };
    let pagesCount = Math.ceil(props.state.totalUsersCount / props.state.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        let isSelected = false;
        props.state.currentPage == i ? isSelected = true : isSelected = false; 
        let element = (<span onClick={setCurrentPage} data-id={i} className={isSelected && styles.selected}>{i}</span>);
        pages.push(element);
    }
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
            {pages}
        </div>
    );

};


export default Users;