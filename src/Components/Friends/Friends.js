import React from "react";
import FriendsMessages from "./FriendsMessage/FriendsMessages";
import {addMessageClick, onChangeMessageFriendText} from "../../redux/friends-reducer";

const Friends = ({state , dispatch , newMessageText}) => {

    let addFriendsText = () => {
    dispatch(addMessageClick())
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        dispatch(onChangeMessageFriendText(text))
    }

    let newFriendsMessages =
        state.messages
            .map(user => <FriendsMessages id={user.id}
                name={user.name} text={user.text}/>)


    return(
        <>
            <div>
                {newFriendsMessages}
                <textarea value={newMessageText} onChange={onMessageChange}/>
                <div>
                    <button onClick={addFriendsText} >add Friend's messages</button>
                </div>
            </div>
        </>
    )
}

export default Friends