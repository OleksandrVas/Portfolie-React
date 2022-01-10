import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";
import PostFormSubmit from "./MyPostForm";





const MyPosts = (props) => {
    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                <PostFormSubmit addPost={props.addPost}/>
                <ProfilePost postData={props.postData}/>
            </div>
        </>
    );
};

export default MyPosts;
