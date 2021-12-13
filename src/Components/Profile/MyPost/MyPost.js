import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";




const MyPosts = (props) => {
    let newPost = React.createRef()


    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPost(text)

    }
    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                <div className={classes.contentPostCreating}>
                    <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}/>
                </div>
                <button className={classes.buttonAdd} onClick={() => {props.addPost()}}>Add new post</button>
                <ProfilePost postData={props.postData}/>
            </div>
        </>
    );
};

export default MyPosts;
