import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";
import {addPostActionCreator, updateNewPostCreator} from "../../../redux/state";




const MyPosts = ({dispatch,newPostText, postData}) => {


    let addPostMessage = () => {
        dispatch(addPostActionCreator());
    }
    let onPostChange = (e) => {
        let text = e.target.value
        dispatch(updateNewPostCreator(text) );

    }

    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                <div className={classes.contentPostCreating}>
                    <textarea onChange={onPostChange} value={newPostText}/>
                </div>
                <button className={classes.buttonAdd} onClick={addPostMessage}>Add new post</button>
                <ProfilePost postData={postData}/>
            </div>
        </>
    );
};

export default MyPosts;
