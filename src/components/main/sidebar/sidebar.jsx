import styles from './sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
        <nav className={styles.nav}>
            <div className={styles.item}>Profile</div>
            <div className={styles.item}>Messages</div>
            <div className={styles.item}>News</div>
            <div className={styles.item}>Settings</div>
        </nav>
    </div>
    );
}