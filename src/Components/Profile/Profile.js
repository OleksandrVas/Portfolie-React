import React from "react";
import MyPosts from "./MyPost/MyPost";
import ProfileContentLogo from "./ProfileContentLogo";

const Profile = () => {
    return (
        <>
            <div >
                <ProfileContentLogo name="Oleksandr" birthday="I was born in 12 October" position="Urk poltava" job="I'm Web Developer"/>
                <MyPosts/>
            </div>
        </>
    );
};
export default Profile;
