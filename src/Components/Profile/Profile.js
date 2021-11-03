import React from "react";
import MyPosts from "./MyPost/MyPost";
import ProfileContentLogo from "./ProfileContentLogo";

const Profile = ({nameOfUser , postData}) => {


    let nameOfUserElement =
        nameOfUser
            .map(user => <ProfileContentLogo id={user.id}
                                             name={user.name}
                                             birthday={user.birthday}
                                             position={user.position}
                                             job={user.job}/>)
    return (
        <>
            <div>
                {nameOfUserElement}
                <MyPosts postData={postData}/>
            </div>
        </>
    );
};
export default Profile;
