import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";


const DialogMassages = ({massages}) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    }


    let massagesElements =
        massages
            .map( d => <Message message={d.massage} id={d.id}/> )

    return (
        <>
            <div className={classes.massages}>
                {massagesElements}
                <textarea ref={newMessage}></textarea>
                <div><button onClick={addMessage}>add message</button></div>
            </div>
        </>
    )
}
export default DialogMassages