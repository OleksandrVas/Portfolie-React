import React from "react";
import classes from "./DialogsMassages.module.css";
import MessageCreat from "./MessageCreat";
import {Redirect} from "react-router-dom";


const DialogMassages = (props) => {

    let textMessageCurrent = React.createRef()

    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChange = () => {

        let text = textMessageCurrent.current.value;
        props.addMessageText(text);
        console.log(text)
    }

     // задача : сделать проверку , и в случаечходства -> переправить на страниц   props.isAuth === false это та же запись  если нет , то ....

    console.log(props.isAuth)
    return (
        <>
            <div className={classes.massages}>
                <MessageCreat state={props.state}/>
                <textarea value={props.state.dialogPage.newMessageText} ref={textMessageCurrent}
                          onChange={onMessageChange}/>
                <div>
                    <button onClick={onAddMessage}>add message</button>
                </div>
            </div>


        </>
    )
}
export default DialogMassages