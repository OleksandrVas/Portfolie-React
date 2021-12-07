import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import classes from "./Profile.module.css";
import defaultImg from "../../assets/img/defaultUserImg.png"

const ProfilePage = (props) => {
    let defaultStatus = "Hi , i'm without status!"
    let defaultStatusForAJobDescr = "Hi , i'm without work!"
    if (!props.profile) {
        return  (
            <>
            <div>
                <Preloader/>
            </div>
            </>
        )
    }
    let src = props.profile.photos.small;
        return (
            <>
                <div className={classes.contentLogo}>
                    <img src={props.profile.photos.small !=null  ? props.profile.photos.small :  defaultImg }/>
                        <div className={classes.contentLogoAbout}>
                        <div>My name is {props.profile.fullName}</div>
                        <div>{props.profile.aboutMe !=null ? props.profile.aboutMe :defaultStatus  }</div>
                        <div>{props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : defaultStatusForAJobDescr }</div>
                    </div>
                </div>
            </>
        )



}

export default ProfilePage