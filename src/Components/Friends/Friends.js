import React from "react";
import FriendsMessages from "./FriendsMessage/FriendsMessages";


const Friends = (props) => {

    let friendText = React.createRef();

    let onButtonClick = () => {
        props.onAddButtonClick()
    };
    let onChangeArea = () => {
        let text = friendText.current.value
        props.onAddChangeArea(text)
    };

    let newFriendsMessages =
        props.state.friendsMessages.messages
            .map(user => <FriendsMessages id={user.id}
                                          name={user.name} text={user.text}
            key={user.id}/>);

    return (
        <>
            <div>
                {newFriendsMessages}
                <textarea value={props.state.friendsMessages.newFriendsMessageText} ref={friendText}
                          onChange={onChangeArea}/>
                <div>
                    <button onClick={onButtonClick}>add Friend's messages</button>
                </div>
            </div>
        </>
    )
}

export default Friends