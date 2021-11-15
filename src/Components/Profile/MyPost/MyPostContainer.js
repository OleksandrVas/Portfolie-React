import React from "react";
import {addPostActionCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPost";




const MyPostsContainer = (props) => {

    let state=props.store.getState()

    let addPostMessage = () => {

        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updateNewPostCreator(text)
        props.store.dispatch(action)

    }

    return (
        <MyPosts addPostText={onPostChange} addPostMessage={addPostMessage} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
    );
};

export default MyPostsContainer;
