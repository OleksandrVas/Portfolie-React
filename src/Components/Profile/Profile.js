import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";
import ProfileStatus from "./ProfileStatus";



const Profile = (props) => {


    return (
        <>
            <div>
                <ProfilePage profile={props.profile}  status={props.status}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <MyPostContainer/>
            </div>
        </>
    );
    debugger
};
export default Profile;
