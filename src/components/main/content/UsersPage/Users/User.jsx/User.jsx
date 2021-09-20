import React from 'react';
import styles from './User.module.css';

class User extends React.Component {
    constructor(props){
        super(props);
    }

    onChangeFollow = () => {
        if(this.props.followed){
            this.props.callbacks.unfollow(this.props.id);
            return;
        }
        this.props.callbacks.follow(this.props.id);
    }
    render(){
        return(
        <div className={styles.user}>
            <div className={styles.image}>
                <img src={this.props.photos.large} alt="" srcset="" />
            </div>
            <div className={styles.info}>
                <div className={styles.fullname}>{this.props.name}</div>
                {/* <div className={styles.location}>
                    <div className={styles.city}>{this.props.location.city},</div>
                    <div className={styles.country}>{this.props.location.country}</div>
                </div> */}
            </div>
            <div onClick={this.onChangeFollow} className={styles.button}>{
                this.props.followed ? 'Unfollow' : 'Follow'
            }</div>
        </div>
        )};
}

export default User;