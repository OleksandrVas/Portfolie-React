import React, {useState} from "react";
import Preloader from "../Common/Preloader/Preloader";
import classes from "./Profile.module.css";
import ProfileData from "./ProfileData";
import ProfilePhotoData from "./ProfilePhotoData";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import {ProfileType} from "../../types/types";


type PropsType = {
    profile: ProfileType | null,
    status: string | null,
    isOwner: boolean,
    // (file: HTMLImageElement) => void
    savePhoto: any,
    saveProfile: (profile: ProfileType) => void
}

const ProfilePage: React.FC<PropsType> = ({profile, status, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)
    const goToEditMode = () => {
        setEditMode(true)
    }

    if (!profile) {
        return (
            <>
                <div>
                    <Preloader/>
                </div>
            </>
        )
    }
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData);
        setEditMode(false)

    }

    return (
        <>
            <div className={classes.contentLogo}>
                <ProfilePhotoData profilePhotoSize={profile.photos.large} savePhoto={savePhoto} isOwner={isOwner}/>

                {editMode ? <ProfileDataFormReduxForm
                        // @ts-ignore
                                                      onSubmit={onSubmit}
                                                      status={status} profile={profile}/>
                    : <ProfileData profile={profile} status={status}
                                   isOwner={isOwner}
                                   gotToEditMode={goToEditMode}/>
                }

                {/*<ProfileData profile={profile} status={status}/>*/}
            </div>
        </>
    )
}


export default ProfilePage