import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const Profile = (props) => {
    console.log("Rerender ")
    debugger
    return (
        <>
            <div>
                <ProfilePage profile={props.profile} status={props.status}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <MyPostContainer/>
            </div>
        </>
    );

};

export default Profile;
