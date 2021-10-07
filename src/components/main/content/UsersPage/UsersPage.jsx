import React from "react";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton";
import styles from "./UserPage.module.css";
import UsersContainer from "./Users/UsersContainer";

class UsersPage extends React.Component {
  render() {
    return (
      <div className={styles.usersPage}>
        <UsersContainer {...this.props}/>
        <ShowMoreButton />
      </div>
    );
  }
}

export default UsersPage;
