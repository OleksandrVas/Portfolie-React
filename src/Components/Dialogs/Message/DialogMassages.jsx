import React from "react";
import classes from "./DialogsMassages.module.css";
import MessageCreat from "./MessageCreat";



const DialogMassages = (props) => {

    let textMessageCurrent = React.createRef()

    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChange = () => {
        let text = textMessageCurrent.current.value;
        props.onAddMessageChange(text);
    }
    return (
        <>
            <div className={classes.massages}>
                <MessageCreat state={props.state}/>
                <textarea  value={props.state.dialogPage.newMessageText} ref={textMessageCurrent} onChange={onMessageChange} />
                <div><button onClick={onAddMessage} >add message</button></div>
            </div>
        </>
    )
}
export default DialogMassages