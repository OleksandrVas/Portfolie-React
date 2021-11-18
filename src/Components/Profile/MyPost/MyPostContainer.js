import React from "react";
import {addPostActionCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPost";
import {connect} from "react-redux";


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

const  MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostContainer;

