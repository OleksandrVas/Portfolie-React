import React from "react";
import MyPosts from "./MyPost/MyPost";
import ProfileContentLogo from "./ProfileContentLogo";


const Profile = ({state,dispatch , newPostText }) => {


    let nameOfUserElement =
        state.nameOfUser
            .map(user => <ProfileContentLogo id={user.id}
                                             name={user.name}
                                             birthday={user.birthday}
                                             position={user.position}
                                             job={user.job}/>)
    return (
        <>
            <div>
                {nameOfUserElement}
                <MyPosts postData={state.postData} dispatch={dispatch} newPostText={newPostText} />
            </div>
        </>
    );
};
export default Profile;
