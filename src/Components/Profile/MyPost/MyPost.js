import React from "react";
import classes from "../MyPost/MyPost.module.css";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <>
      <div className={classes.content}>
        <div className={classes.contentNamePost}>My Posts</div>
        <div className={classes.contentPostCreating}>
          <input placeholder="What do you think about me ?" />
        </div>
        <div className={classes.posts}>
          <Post massage="How are you " likeCount="21"/>
          <Post massage="it's my first post " likeCount="13"/>
          {/* <Post />
          <Post /> */}
        </div>
      </div>
    </>
  );
};

export default MyPosts;
