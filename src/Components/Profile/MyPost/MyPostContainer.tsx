import React, {FC} from "react";
import MyPosts from "./MyPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {actions} from "../../../redux/profile-reducer";

type OwnProps = {}
type MapStateToPropsType = {}
type MapDispatchToPropsType = {
    addPost: (postYourMessage: string) => void
}
type PropsType = OwnProps & MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) => {

    return {
        postData: state.profilePage.postData,
    }
}


const MyPostContainer =
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, actions,)(MyPosts);

export default MyPostContainer;

