import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";
import ProfileStatus from "./ProfileStatus";



const Profile = (props) => {


    return (
        <>
            <div>
                <ProfilePage profile={props.profile} />
                <ProfileStatus status={"Hey Bro"}/>
                <MyPostContainer/>
            </div>
        </>
    );
    debugger
};
export default Profile;
