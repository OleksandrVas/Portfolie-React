import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import classes from "./Profile.module.css";
import defaultImg from "../../assets/img/defaultUserImg.png"

const ProfilePage = ({profile,status}) => {
    let defaultStatus = "Hi , i'm without status!"
    let defaultStatusForAJobDescr = "Hi , i'm without work!"
    if (!profile) {
        return (
            <>
                <div>
                    <Preloader/>
                </div>
            </>
        )
    }
    let src = profile.photos.small;
    return (
        <>
            <div className={classes.contentLogo}>
                <img src={src != null ? src : defaultImg}/>
                <div className={classes.contentLogoAbout}>
                    <div>My name is {profile.fullName}</div>
                    <div>{profile.aboutMe != null ? profile.aboutMe : defaultStatus}</div>
                    <div>{profile.lookingForAJobDescription != null ? profile.lookingForAJobDescription : defaultStatusForAJobDescr}</div>
                    <div>{status }</div>
                </div>
            </div>
        </>
    )


}

export default ProfilePage