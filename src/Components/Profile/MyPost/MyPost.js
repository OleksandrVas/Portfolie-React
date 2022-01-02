import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";
import PostFormSubmit from "./MyPostForm";





const MyPosts = (props) => {

    const restOp = (a,b ,...manyMore ) => {
        console.log(a,"a")
        console.log(b,"a")
        console.log(manyMore,"manyMore")
    }

    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                <PostFormSubmit addPost={props.addPost}/>
                <ProfilePost postData={props.postData}/>
                {restOp("hello","Brother" , "many" , "more" ,"booble")}
            </div>
        </>
    );
};

export default MyPosts;
