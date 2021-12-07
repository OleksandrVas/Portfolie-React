import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";


const Profile = (props) => {

    return (
        <>
            <div>
                <ProfilePage profile={props.profile} />
                <MyPostContainer/>

            </div>
        </>
    );
    debugger
};
export default Profile;
