import React from "react";
import Post from "./MyPost/post/Post";


const ProfilePost = ({postData}) => {
    // let postData = [
    //     {massage: "How are you ", id: 0, likesCount: 22},
    //     {massage: "it's my first post ", id: 2, likesCount: 200},
    //     {massage: "it's my second post  ", id: 3, likesCount: 183}
    // ]

    let postDataElement =
        postData
            .map(post => <Post
                massage={post.massage}
                likesCount={post.likesCount}
                id={post.id}/> )

    return (
        <>
            <div>
                {postDataElement}
            </div>
        </>
    )
}
export default ProfilePost
