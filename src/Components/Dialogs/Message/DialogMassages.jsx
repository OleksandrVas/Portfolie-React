import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";
import {addMessageCreator, addMessageTextCreator} from "../../../redux/state";


const DialogMassages = ({dispatch, newMessageText , massages}) => {

    let newMessage = React.createRef();

    let onAddMessage = () => {
        dispatch(addMessageCreator())
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        dispatch(addMessageTextCreator(text));
        console.log(newMessageText)
    }


    let massagesElements =
        massages
            .map( d => <Message message={d.massage} id={d.id}/> )

    return (
        <>
            <div className={classes.massages}>
                {massagesElements}
                <textarea ref={newMessage} value={newMessageText} onChange={onMessageChange} />
                <div><button onClick={onAddMessage} >add message</button></div>
            </div>
        </>
    )
}
export default DialogMassages