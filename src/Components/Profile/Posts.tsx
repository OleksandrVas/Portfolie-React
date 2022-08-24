import React from "react";
import Post from "./MyPost/post/Post";


const ProfilePost: React.FC<PropsType> = ({postData}) => {
    let postDataElement = postData
        .map((post) => <Post
            massage={post.message}
            likesCount={post.likesCount}
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


type  PostDataType = {
    message: string,
    likesCount: number,
    id: number,
}
type PropsType = {
    postData: Array<PostDataType>
}