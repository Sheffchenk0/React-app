import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './profile.module.css';
import StatusWithHooks from './status/StatusWithHooks';

export default function Profile(props) {
    const [editMode, setEditMode] = useState(false);
    // let onChangeImage = (event) => {
    //     const files = event.target.files;
    //     if(files.length === 1){
    //         props.savePhoto(files[0]);
    //     }
    // }        
    let {register, handleSubmit} = useForm({ shouldUseNativeValidation: true });
    let onSubmit = data => {
        props.saveProfile(data);
        setEditMode(false);
    };
    let onEdit = () => {
        setEditMode(true);
    }
    let onCancel = () => {
        setEditMode(false);
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
            {props.isOwner && (editMode || <button onClick={onEdit}>Edit</button>)}
            {editMode && props.isOwner && 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>Edit</div>
                <div><label htmlFor="fullname">Fullname</label></div>
                <input type="file" accept=".jpg, .jpeg, .png" {...register("file")}/>
                <div><input type="text" id="fullname" {...register("fullname", { required: "Please enter your fullname." })}/></div>

                <div><label htmlFor="lookingForAJob">Looking For a Job</label></div>
                <input id="lookingForAJob" type="checkbox" {...register("lookingForAJob")}/>
                <div><label htmlFor="lookingForAJobDescription">desc</label></div>
                <input id="lookingForAJobDescription" type="text" {...register("lookingForAJobDescription")}/>
                <span>Contacts:</span>
                <div><label htmlFor="github">github</label></div>
                <div><input type="text" id="github" {...register("github")}/></div>

                <div><label htmlFor="vk">vk</label></div>
                <div><input type="text" id="vk" {...register("vk")}/></div>                

                <div>
                    <button onClick={onCancel}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>}
        </div>
    )
}