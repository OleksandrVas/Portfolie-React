import React from "react";
import ProfileContentLogo from "./ProfileContentLogo";
import MyPostsContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {

    let nameOfUserElement =
        props.state.nameOfUser
            .map(user => <ProfileContentLogo id={user.id}
                                             name={user.name}
                                             birthday={user.birthday}
                                             position={user.position}
                                             job={user.job}/>)
    return (
        <>
            <div>
                {nameOfUserElement}
                <MyPostsContainer  store={props.store}  />
            </div>
        </>
    );
};
export default Profile;
