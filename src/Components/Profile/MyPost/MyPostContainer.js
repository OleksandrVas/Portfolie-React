import React from "react";
import {addPostActionCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPost";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>{

            (store) => {
                let state = store.getState()
                let addPostMessage = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = updateNewPostCreator(text)
                    store.dispatch(action)

                }
                return <MyPosts addPostText={onPostChange} addPostMessage={addPostMessage}
                                postData={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;
