import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";


const MyPosts = ({postData, addPost, newPostText, addPostText}) => {


    let newPostElement = React.createRef()

    let addPostMessage = () => {
        addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        addPostText(text);

    }

    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                <div className={classes.contentPostCreating}>
                    <textarea onChange={onPostChange} value={newPostText} ref={newPostElement}/>
                </div>
                <button className={classes.buttonAdd} onClick={addPostMessage}>Add new post</button>
                <ProfilePost postData={postData}/>
            </div>
        </>
    );
};

export default MyPosts;
