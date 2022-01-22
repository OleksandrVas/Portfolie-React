import React from "react";
import classes from "./Profile.module.css";
import defaultImg from "../../assets/img/defaultUserImg.png";

const ProfilePhotoData = ({profilePhotoSize, savePhoto, isOwner}) => {
    const src = profilePhotoSize;
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={classes.mainPhotoUserContainer}>
            <img src={src || defaultImg} className={classes.mainPhotoUser}/>
            {isOwner &&
            <input type={"file"} className={classes.mainPhotoUploader} onChange={onMainPhotoSelected}/>}
        </div>
    )
}

export default ProfilePhotoData