import styles from './profile.module.css';

export default function Profile(){
    return (
    <div className={styles.profile}>
        <div className={styles.img}>
            <img src="https://cdn.vox-cdn.com/thumbor/ajQqX6GfVMuJoRYMh2pl3eJsRv0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13959855/acastro_190218_1777_apple_streaming_0003.jpg" alt="" />
        </div>
        <div className={styles.profileInfo}>
            <div className={styles.fullname}>Никита Шевченко</div>
            <div className={styles.status}>Я тут</div>
            <div className={styles.city}>Борисоглебск</div>
            <div className={styles.dateOfBirth}>16.10.2005</div>
        </div>
    </div>
    )
}