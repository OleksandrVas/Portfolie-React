import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";
import {Redirect} from "react-router-dom";


const Profile = (props) => {
console.log(props.isAuth)



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
