import * as React from "react";
import FriendsMessages from "./FriendsMessage/FriendsMessages";
import {Field, reduxForm} from "redux-form";



type UserType = {
    id : number | null,
    name: string | null,
    text: string | null,
    key?: number | null
}
type MessagesType = {
    id: number,
    name: string,
    text: string
}

const Friends = (props: { addFriendsMessage: (values: () => void) => void, state: { friendsMessages: { messages: Array<MessagesType> } } }) => {
    const onPostSend = (values: { newFriendsMessageText: () => string; }) => {
        props.addFriendsMessage(values.newFriendsMessageText)
    }
    let newFriendsMessages =
        props.state.friendsMessages.messages
            .map((user: UserType) => <FriendsMessages id={user.id}
                                                      name={user.name} text={user.text}
                                                      key={user.id}/>);
    return (
        <>
            <div>
                {newFriendsMessages}
                <AddFriendsMessageRedux />
            </div>
        </>
    )
}
const AddFriendsMessage = () => {
    return (
        <>
            <form >
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