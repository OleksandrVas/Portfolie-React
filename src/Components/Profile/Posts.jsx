import React from "react";
import Post from "./MyPost/post/Post";


const ProfilePost = () => {
    return (
        <>
            <div >
                <Post massage="How are you " likesCount="21"/>
                <Post massage="it's my first post " likesCount="13"/>
            </div>
        </>
    )
}
export default ProfilePost
