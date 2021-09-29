import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import styles from "./main.module.css";
import Sidebar from "./sidebar/sidebar";
import UsersPageContainer from "./content/UsersPage/UsersPageContainer";
import ProfilePageContainer from "./content/profilePage/ProfilePageContainer";
import DialogsPageContainer from "./content/dialogsPage/DialogsPageContainer";
import LoginPage from "./content/loginPage/LoginPage";

export default function Main(props) {
    return (
            <div className={styles.main}>
                <Sidebar />
                <Route path="/dialogs" render={()=><DialogsPageContainer/>}/>
                <Route path="/profile/:userId?" render={()=><ProfilePageContainer/>}/>
                <Route path="/users" render={()=><UsersPageContainer/>}/>
                <Route path="/login" render={() => <LoginPage />} />
            </div>
    );
}
