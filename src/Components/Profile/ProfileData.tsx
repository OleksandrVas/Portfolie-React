import React from "react";
import classes from "./Profile.module.css";
import Contact from "./Contact";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile : ProfileType | null,
    status : string | null,
    isOwner : boolean ,
    gotToEditMode : () => void
}

const ProfileData : React.FC<PropsType> = ({profile, status, isOwner, gotToEditMode}) => {
    return (
        <div className={classes.contentLogoAboutContainer}>
            {profile !== null &&
            <div>{isOwner &&
            <div>
                <button onClick={gotToEditMode}> Edit my Profile</button>
            </div>
            }
                <div><b>My full name</b> :{profile.fullName}</div>

                <div>
                    {status}
                </div>
                <div><b>About me </b>: <b>{profile.aboutMe}</b></div>
                <div><b>Hi , i'm looking for a job </b> :{profile.lookingForAJob ? "no " : "yes"}</div>
                <div>
                    {profile.lookingForAJob &&
                    <div> My professional skills {profile.lookingForAJobDescription} </div>
                    }
                </div>
                <div>
                    {/*<b>Contacts : {Object.keys(profile.contacts).map((key)  => {*/}
                    {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
                    {/*})}</b>*/}
                </div></div>

            }

        </div>
    )
}

export default ProfileData