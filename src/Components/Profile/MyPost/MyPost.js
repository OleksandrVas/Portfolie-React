import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";


const MyPosts = ({postData}) => {

    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                <button className={classes.buttonAdd}>Add new post </button>
                <div className={classes.contentPostCreating}>
                    <input placeholder="What do you think about me ?"/>
                </div>
                <ProfilePost postData={postData}/>
            </div>
        </>
    );
};

export default MyPosts;
