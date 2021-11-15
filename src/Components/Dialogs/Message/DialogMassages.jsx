import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";
import {addMessageCreator, addMessageTextCreator} from "../../../redux/dialogs-reducer";


const DialogMassages = (props) => {


    let onAddMessage = () => {
        props.dispatch(addMessageCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(addMessageTextCreator(text));
    }


    let massagesElements =
        props.massages
            .map( d => <Message message={d.massage} id={d.id}/> )

    return (
        <>
            <div className={classes.massages}>
                {massagesElements}
                <textarea  value={props.newMessageText} onChange={onMessageChange} />
                <div><button onClick={onAddMessage} >add message</button></div>
            </div>
        </>
    )
}
export default DialogMassages