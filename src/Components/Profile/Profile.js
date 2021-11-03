import React from "react";
import MyPosts from "./MyPost/MyPost";
import ProfileContentLogo from "./ProfileContentLogo";

const Profile = () => {
    let nameOfUser = [
        {
            id: 0,
            name: "Oleksandr",
            birthday: "I was born in 12 October",
            position: "Urk poltava",
            job: "I'm Web Developer"
        }
    ]

    let nameOfUserElement =
        nameOfUser
            .map(user => <ProfileContentLogo id={user.id} name={user.name} birthday={user.birthday}
                                             position={user.position}
                                             job={user.job}/>)
    return (
        <>
            <div>
                {nameOfUserElement}
                <MyPosts/>
            </div>
        </>
    );
};
export default Profile;
