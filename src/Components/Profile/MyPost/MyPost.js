import React from "react";
import classes from "../MyPost/MyPost.module.css";
import ProfilePost from "../Posts";


const MyPosts = ({postData}) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)

    }

    return (
        <>
            <div className={classes.content}>
                <div className={classes.contentNamePost}>My Posts</div>
                <div className={classes.contentPostCreating}>
                    <input placeholder="What do you think about me ?" ref={newPostElement}/>
                </div>
                <button className={classes.buttonAdd} onClick={addPost}>Add new post</button>
                <ProfilePost postData={postData}/>
            </div>
        </>
    );
};

export default MyPosts;
