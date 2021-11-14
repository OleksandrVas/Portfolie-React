import React from "react";
import FriendsMessages from "./FriendsMessage/FriendsMessages";
import {addFriendsMessage, addFriendsMessageText} from "../../redux/friends-reducer";


const Friends = ({state , dispatch , newFriendsMessageText}) => {

    let onButtonClick =() => {
        dispatch(addFriendsMessage())
    };
    let onChangeArea = (e) => {
        let text = e.target.value ;
        dispatch(addFriendsMessageText(text))
    }


    let newFriendsMessages =
        state.messages
            .map(user => <FriendsMessages id={user.id}
                name={user.name} text={user.text}/>)


    return(
        <>
            <div>
                {newFriendsMessages}
                <textarea value={newFriendsMessageText}  onChange={onChangeArea} />
                <div>
                    <button onClick={onButtonClick} >add Friend's messages</button>
                </div>
            </div>
        </>
    )
}

export default Friends