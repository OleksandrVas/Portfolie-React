import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";



const MyPosts = ({postData , addPost }) => {


    let newPostElement = React.createRef()

    let addPostMessage = () => {

        let text = newPostElement.current.value;
        addPost(text);

    }

    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                <div className={classes.contentPostCreating}>
                    <input placeholder="What do you think about me ?" ref={newPostElement}/>
                </div>
                <button className={classes.buttonAdd} onClick={addPostMessage}>Add new post</button>
                <ProfilePost postData={postData}/>
            </div>
        </>
    );
};

export default MyPosts;
