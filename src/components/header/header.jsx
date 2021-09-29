import styles from './header.module.css';


export default function Header(props){
    return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="logo" />
        </div>
        <div className={styles.title}>{props.isAuth ? 'ReactApp' : 'No authorized'}</div>        
        {props.isAuth ? <div className={styles.logout} onClick={props.logout}>Logout</div> : null}
    </header>
    )
}