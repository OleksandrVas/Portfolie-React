import React, {useState} from "react";
import Preloader from "../Common/Preloader/Preloader";
import classes from "./Profile.module.css";
import ProfileData from "./ProfileData";
import ProfilePhotoData from "./ProfilePhotoData";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfilePage = ({profile, status, isOwner, savePhoto , saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return (
            <>
                <div>
                    <Preloader/>
                </div>
            </>
        )
    }
    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false )
    }
    return (
        <>
            <div className={classes.contentLogo}>
                <ProfilePhotoData profilePhotoSize={profile.photos.large} savePhoto={savePhoto} isOwner={isOwner}/>


                {editMode ? <ProfileDataFormReduxForm initialValues={profile}
                                                      onSubmit={onSubmit}
                                                      status={status} profile={profile}/>
                    : <ProfileData profile={profile} status={status}
                                   isOwner={isOwner}
                                   gotToEditMode={() => {
                                       setEditMode(true)
                                   }}/>
                }

                {/*<ProfileData profile={profile} status={status}/>*/}
            </div>
        </>
    )
}


export default ProfilePage