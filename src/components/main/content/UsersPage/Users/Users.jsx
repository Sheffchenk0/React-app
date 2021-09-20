import React from 'react';
import User from './User.jsx/User';
import styles from './User.module.css';
import * as axios from 'axios';

class Users extends React.Component {
    constructor(props){
        super(props);
    };
    componentDidMount(){        
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
            .then(result=>{
                console.log(result);
                this.props.callbacks.setState(result.data.items, result.data.totalCount)
            });
    }

    setCurrentPage = (event) =>{
        this.props.callbacks.setCurrentPage(event);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${event.target.dataset.id}&count=${this.props.state.pageSize}`)
        .then(result=>{
            console.log(result);
            this.props.callbacks.setState(result.data.items, result.data.totalCount)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.state.totalUsersCount / this.props.state.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            let isSelected = false;
            this.props.state.currentPage == i ? isSelected = true : isSelected = false; 
            let element = (<span onClick={this.setCurrentPage} data-id={i} className={isSelected && styles.selected}>{i}</span>);
            pages.push(element);
        }
        let users = this.props.state.users.map(user=>{
            return <User key={user.id} callbacks={this.props.callbacks} id={user.id} name={user.name} status={user.status} photos={user.photos} followed={user.followed}/>
        });
        console.log(pages);
        return (
            <div className={styles.users}>
                {users}
                {pages}
            </div>
        );

    }
}

export default Users;