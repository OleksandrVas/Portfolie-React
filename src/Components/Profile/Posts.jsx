import React from "react";
import Post from "./MyPost/post/Post";


const ProfilePost = () => {
    let postData = [
        {massage:"How are you " , id:0 , likesCount:22 },
        {massage: "it's my first post ", id:2 , likesCount: 200 }
    ]

    return (
        <>
            <div >
                <Post massage={postData[0].massage }likesCount={postData[0].likesCount} id={postData[0].id}/>
                <Post massage={postData[1].massage} likesCount={postData[1].likesCount} id={postData[1].id}/>
            </div>
        </>
    )
}
export default ProfilePost
