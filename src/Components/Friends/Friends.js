import React from "react";
import FriendsMessages from "./FriendsMessage/FriendsMessages";
import {Field, reduxForm} from "redux-form";


const Friends = (props) => {

    const onPostSend = (values) => {
        props.addFriendsMessage(values.newFriendsMessageText)
    }


    let newFriendsMessages =
        props.state.friendsMessages.messages
            .map(user => <FriendsMessages id={user.id}
                                          name={user.name} text={user.text}
                                          key={user.id}/>);
    return (
        <>
            <div>
                {newFriendsMessages}
                <AddFriendsMessageRedux onSubmit={onPostSend}/>
            </div>
        </>
    )
}

const AddFriendsMessage = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component="textarea" name="newFriendsMessageText" placeholder="Send"/>
                </div>
                <div>
                    <button>
                        Send
                    </button>
                </div>
            </form>
        </>
    )
}

const AddFriendsMessageRedux = reduxForm({
    form: "post"
})(AddFriendsMessage)


export default Friends