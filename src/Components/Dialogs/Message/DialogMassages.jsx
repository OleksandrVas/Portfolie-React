import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";


const DialogMassages = ({addMessage ,  addMessageText , newMessageText , massages}) => {

    let newMessage = React.createRef();

    let onAddMessage = () => {
        addMessage()
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        addMessageText(text);
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