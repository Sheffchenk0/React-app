import React from 'react';
import styles from './User.module.css';
import { NavLink } from "react-router-dom";

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeFollow = () => {
        if (this.props.followed) {
            this.props.unfollow(this.props.id);
            return;
        }
        this.props.follow(this.props.id);
    }
    render() {
        return (
                <div className={styles.user} >
                    <div className={styles.image}>
                        <img src={this.props.photos.large} alt="" srcset="" />
                    </div>
                    <NavLink className={styles.info} to={"/profile/" + this.props.id}>
                        <div className={styles.fullname}>{this.props.name}</div>
                        {/* <div className={styles.location}>
                    <div className={styles.city}>{this.props.location.city},</div>
                    <div className={styles.country}>{this.props.location.country}</div>
                </div> */}
                    </NavLink>
                    <div onClick={this.props.isDisabled ? null : this.onChangeFollow} className={styles.button}>{
                        this.props.followed ? 'Unfollow' : 'Follow'
                    }</div>
                </div>
        )
    };
}

export default User;