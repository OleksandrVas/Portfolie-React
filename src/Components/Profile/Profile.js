import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const Profile = ({profile,status,updateStatus ,savePhoto, isOwner , saveProfile}) => {
    return (
        <>
            <div>
                <ProfilePage isOwner={isOwner} savePhoto={savePhoto} profile={profile} status={status} saveProfile={saveProfile}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <MyPostContainer/>
            </div>
        </>
    );

};

export default Profile;
