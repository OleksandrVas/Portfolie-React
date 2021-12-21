import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";
import ProfileStatus from "./ProfileStatus";



const Profile = (props) => {
console.log(props.isAuth)



    return (
        <>
            <div>
                <ProfilePage profile={props.profile} />
                <ProfileStatus status={"Hello-Sas"}/>
                <MyPostContainer/>
            </div>
        </>
    );
    debugger
};
export default Profile;
