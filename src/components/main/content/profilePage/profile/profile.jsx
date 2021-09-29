import styles from './profile.module.css';
import Status from './status/Status';

export default function Profile(props){
    console.log(props);
    return (
    <div className={styles.profile}>
        <div className={styles.img}>
            <img src={props.profile.photos.large} alt="" />
        </div>
        <div className={styles.profileInfo}>
            <div className={styles.fullname}>{props.profile.fullName}</div>
            <div className={styles.status}>{props.profile.aboutMe}</div>
            <Status 
                status={props.status}
                setStatus={props.setStatus}/>
            {props.profile.lookingForAJob && <>                
                <div className={styles.city}>В поиске</div>
                <div className={styles.dateOfBirth}>{props.profile.lookingForAJobDescription}</div>
            </>}
        </div>
    </div>
    )
}