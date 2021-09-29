import React from "react";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton";
import styles from "./UserPage.module.css";
import UsersContainer from "./Users/UsersContainer";

class UsersPage extends React.Component {
  render() {
    return (
      <div className={styles.usersPage}>
        <UsersContainer
            state={this.props.usersState}
            follow={this.props.follow}
            setCurrentPage={this.props.setCurrentPage}
            setState={this.props.setState}
            togglePreloader={this.props.togglePreloader}
            unfollow={this.props.unfollow}
            toggleDisabled={this.props.toggleDisabled}
            getPage={this.props.getPage}
        />
        <ShowMoreButton />
      </div>
    );
  }
}

export default UsersPage;
