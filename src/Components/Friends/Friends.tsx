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
type OwnProps = {
    messages : Array<MessagesType>
}
type PropsType = OwnProps

const Friends : React.FC<PropsType> = (messages) => {

    if (messages instanceof  Array) {
        let newFriendsMessages = messages.map((user: UserType) => <FriendsMessages id={user.id}
                                                                                   name={user.name} text={user.text} key={user.id}/>);
        return (
            <>
                <div>
                    {newFriendsMessages}
                    <AddFriendsMessageRedux />
                </div>
            </>
        )
    }
    return  (
        <div>
            Probably have a problem
        </div>
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