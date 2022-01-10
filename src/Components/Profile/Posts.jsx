import React from "react";
import Post from "./MyPost/post/Post";


const ProfilePost = (props) => {
    let postDataElement =
        props.postData
            .map(post => <Post
                massage={post.message}
                likesCount={post.likesCount}
                id={post.id}
                key={post.id}/>)
    return (
        <>
            <div>
                {postDataElement}
            </div>
        </>
    )
};

export default ProfilePost
