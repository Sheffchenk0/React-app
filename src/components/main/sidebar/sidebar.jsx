import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.nav}>
                <NavLink className={styles.item} to="/profile" activeClassName={styles.active}>
                    Profile
                </NavLink>
                <NavLink className={styles.item} to="/dialogs" activeClassName={styles.active}>
                    Messages
                </NavLink>
                <NavLink className={styles.item} to="/users" activeClassName={styles.active}>
                    Users
                </NavLink>
                <NavLink className={styles.item} to="/settings" activeClassName={styles.active}>
                    Settings
                </NavLink>
            </nav>
        </div>
    );
}
