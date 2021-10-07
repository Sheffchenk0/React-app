import React, {useState, useEffect} from 'react';

let StatusWithHooks = (props) => {
    const [EditMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        props.updateStatus(props.status)
    }, [props.status]);
    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        props.setStatus(status);
        setEditMode(false);
    };
    const onChangeStatus = (event) => {
        setStatus(event.currentTarget.value);
    }
    return(
       EditMode ? 
        <input onChange={onChangeStatus} autoFocus onBlur={deactivateEditMode} value={status} type="text" />
       : <div onDoubleClick={activateEditMode}>{props.status} 1</div>
 
    )
}

export default StatusWithHooks;