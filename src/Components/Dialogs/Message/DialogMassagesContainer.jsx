import React from "react";
import {addMessageCreator, addMessageTextCreator} from "../../../redux/dialogs-reducer";
import DialogMassages from "./DialogMassages";


const DialogMassagesContainer = (props) => {
    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    let onAddMessageChange = (text) => {
        let action = addMessageTextCreator(text);
        props.store.dispatch(action)
    }

    return (
        <>
           <DialogMassages addMessage={addMessage} onAddMessageChange={onAddMessageChange} state={state}  />
        </>
    )
}
export default DialogMassagesContainer