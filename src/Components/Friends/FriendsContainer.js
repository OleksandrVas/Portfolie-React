import React from "react";
import {addFriendsMessage, addFriendsMessageText} from "../../redux/friends-reducer";
import Friends from "./Friends";


const FriendsContainerContainer = (props) => {

    let state = props.store.getState()

    let onAddButtonClick = () => {
        props.store.dispatch(addFriendsMessage())
    };
    let onAddChangeArea = (text) => {
        let action = addFriendsMessageText(text);
        props.store.dispatch(action)
    }
    return (
        <>
            <Friends state={state} onAddButtonClick={onAddButtonClick} onAddChangeArea={onAddChangeArea}/>
        </>
    )
}

export default FriendsContainerContainer