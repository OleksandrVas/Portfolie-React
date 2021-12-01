import React from "react";
import ProfileContentLogo from "./ProfileContentLogo";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
    let nameOfUserElement =
        props.store.getState().profilePage.nameOfUser
            .map(user => <ProfileContentLogo id={user.id}
                                             name={user.name}
                                             birthday={user.birthday}
                                             position={user.position}
                                             job={user.job}
                                             key={user.id}/>)

    return (
        <>
            <div>
                {nameOfUserElement}
                <MyPostContainer/>

            </div>
        </>
    );
};
export default Profile;
