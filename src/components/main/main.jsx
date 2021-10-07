import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./main.module.css";
import Sidebar from "./sidebar/sidebar";

const DialogsPageContainer = React.lazy(()=>import('./content/dialogsPage/DialogsPageContainer'));
const ProfilePageContainer = React.lazy(()=>import('./content/profilePage/ProfilePageContainer'));
const UsersPageContainer = React.lazy(()=>import('./content/UsersPage/UsersPageContainer'));
const LoginPage = React.lazy(()=>import('./content/loginPage/LoginPage'));
export default function Main(props) {
    return (
            <div className={styles.main}>
                <Sidebar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Redirect exact from="/" to="/profile" />
                        <Route path="/dialogs" render={()=><DialogsPageContainer/>}/>
                        <Route path="/profile/:userId?" render={()=><ProfilePageContainer/>}/>
                        <Route path="/users" render={()=><UsersPageContainer/>}/>
                        <Route path="/login" render={() => <LoginPage />} />                                                
                        <Route path="*" render={() => <LoginPage />} />
                    </Switch>
                </Suspense>
            </div>
    );
}
