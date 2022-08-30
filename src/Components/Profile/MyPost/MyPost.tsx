import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";
import PostFormSubmit from "./MyPostForm";
import {PostDataType} from "../../../types/types";


type PropsType = {
    addPost : (postYourMessage : string) => void ,
    postData : Array<PostDataType>
}


const MyPosts: React.FC<PropsType> = (props) => {

    // @ts-ignore
    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                {/*<PostFormSubmit addPost={props.addPost}/>*/}
                <ProfilePost postData={props.postData}/>
            </div>
        </>
    );
};

export default MyPosts;
