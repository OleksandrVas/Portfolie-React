import React from "react";
import Post from "./MyPost/post/Post";


const ProfilePost = ({postData}) => {


    let postDataElement =
        postData
            .map(post => <Post
                massage={post.message}
                likesCount={post.likesCount}
                id={post.id}/>)

    return (
        <>
            <div>
                {postDataElement}
            </div>
        </>
    )
}
export default ProfilePost
