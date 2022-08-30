import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";


const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])  //в [] идет зависимость от того чего нужно вызывать эту функцию

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false);
        if (status!== null) {
            props.updateStatus(status)
        }
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status || "Hello"} </span>
            </div>
            }
            {editMode &&
            <div>
                {status!==null && <input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true} value={status}/>}
            </div>
            }

        </>
    )
}

export default ProfileStatusWithHooks

type PropsType = {
    status: string | null,
    updateStatus: (status: string) => void
}