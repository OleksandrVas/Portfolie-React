import React from "react";
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        postData : state.profilePage.postData,
        newPostText : state.profilePage.newPostText,
    }
    // эта функция , принимает обьект

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPostMessage : () => {
//             dispatch(addPostActionCreator());
//         } ,
//         addPostText : (text) => {
//             let action = updateNewPostCreator(text)
//             dispatch(action)
//         },
//
//     }
    // эта фунция ,принимает колбек Функции
}
const  MyPostContainer = connect(mapStateToProps,{addPost})(MyPosts);

export default MyPostContainer;

