import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";
import {addMessageCreator, addMessageTextCreator} from "../../../redux/state";


const DialogMassages = ({dispatch, newMessageText , massages}) => {


    let onAddMessage = () => {
        dispatch(addMessageCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        dispatch(addMessageTextCreator(text));
    }


    let massagesElements =
        massages
            .map( d => <Message message={d.massage} id={d.id}/> )

    return (
        <>
            <div className={classes.massages}>
                {massagesElements}
                <textarea  value={newMessageText} onChange={onMessageChange} />
                <div><button onClick={onAddMessage} >add message</button></div>
            </div>
        </>
    )
}
export default DialogMassages