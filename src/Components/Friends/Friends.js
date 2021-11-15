import React from "react";
import FriendsMessages from "./FriendsMessage/FriendsMessages";
import {addFriendsMessage, addFriendsMessageText} from "../../redux/friends-reducer";


const Friends = (props) => {

    let onButtonClick =() => {
        props.dispatch(addFriendsMessage())
    };
    let onChangeArea = (e) => {
        let text = e.target.value ;
        props.dispatch(addFriendsMessageText(text))
    }


    let newFriendsMessages =
        props.state.messages
            .map(user => <FriendsMessages id={user.id}
                name={user.name} text={user.text}/>)


    return(
        <>
            <div>
                {newFriendsMessages}
                <textarea value={props.newFriendsMessageText}  onChange={onChangeArea} />
                <div>
                    <button onClick={onButtonClick} >add Friend's messages</button>
                </div>
            </div>
        </>
    )
}

export default Friends