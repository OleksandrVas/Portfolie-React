import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import classes from "./Profile.module.css";

const ProfilePage = (props) => {
debugger
    if (!props.profile) {
        return  (
            <>
            <div>
                <Preloader/>
            </div>
            </>
        )
    }else {
        return (
            <>
                <div className={classes.contentLogo}>
                    <img src={props.profile.photos.small}/>
                        <div className={classes.contentLogoAbout}>
                        <div>My name is {props.profile.fullName}</div>
                        <div>{props.profile.aboutMe}</div>
                        <div> сейчас  {props.profile.lookingForAJobDescription}</div>
                    </div>
                </div>
            </>
        )
    }


}

export default ProfilePage