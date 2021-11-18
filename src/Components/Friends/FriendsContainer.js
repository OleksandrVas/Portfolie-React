import React from "react";
import {addFriendsMessage, addFriendsMessageText} from "../../redux/friends-reducer";
import Friends from "./Friends";
import StoreContext from "../../StoreContext";


const FriendsContainerContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let onAddButtonClick = () => {
                        store.dispatch(addFriendsMessage())
                    };
                    let onAddChangeArea = (text) => {
                        let action = addFriendsMessageText(text);
                        store.dispatch(action)
                    }
                    return <Friends state={state} onAddButtonClick={onAddButtonClick}
                                    onAddChangeArea={onAddChangeArea}/>

                }
            }

        </StoreContext.Consumer>


    )
}

export default FriendsContainerContainer