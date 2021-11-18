import React from "react";
import {addPostActionCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPost";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


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


let mapStateToProps = (state) => {
    return {
        postData : state.profilePage.postData,
        newPostText : state.profilePage.newPostText,
    }
    // эта функция , принимает обьект
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostMessage : () => {
            dispatch(addPostActionCreator());
        } ,
        addPostText : (text) => {
            let action = updateNewPostCreator(text)
            dispatch(action)
        },

    }
    // эта фунция ,принимает колбекФункции
}

const SuperProfileContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
