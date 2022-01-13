import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const Profile = ({profile,status,updateStatus}) => {
    return (
        <>
            <div>
                <ProfilePage profile={profile} status={status}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <MyPostContainer/>
            </div>
        </>
    );

};

export default Profile;
