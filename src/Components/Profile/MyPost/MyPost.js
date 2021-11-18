import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";




const MyPosts = (props) => {
    debugger
    let newPost = React.createRef()

    let onAddPost = () => {
        props.addPostMessage();
    }
    let onPostChange = () => {
        let text = newPost.current.value;
        props.addPostText(text)

    }
    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                <div className={classes.contentPostCreating}>
                    <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}/>
                </div>
                <button className={classes.buttonAdd} onClick={onAddPost}>Add new post</button>
                <ProfilePost postData={props.postData}/>
            </div>
        </>
    );
};

export default MyPosts;
