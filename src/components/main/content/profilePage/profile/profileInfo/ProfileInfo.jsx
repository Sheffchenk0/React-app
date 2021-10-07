import styles from './profile.module.css';
import StatusWithHooks from './status/StatusWithHooks';

export default function Profile(props) {
    let onChangeImage = (event) => {
        const files = event.target.files;
        if(files.length === 1){
            props.savePhoto(files[0]);
        }
    }
    return (
        <div className={styles.profile}>
            <div className={styles.img}>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.fullname}>{props.profile.fullName}</div>
                <div className={styles.aboutMe}>{props.profile.aboutMe}</div>
                <StatusWithHooks
                    status={props.status}
                    setStatus={props.setStatus}
                    updateStatus={props.updateStatus} />
                {props.profile.lookingForAJob && <>
                    <div className={styles.city}>В поиске</div>
                    <div className={styles.dateOfBirth}>{props.profile.lookingForAJobDescription}</div>
                </>}
            </div>
            {props.isOwner && <input onChange={onChangeImage} type="file" accept=".jpg, .jpeg, .png"/>}
        </div>
    )
}