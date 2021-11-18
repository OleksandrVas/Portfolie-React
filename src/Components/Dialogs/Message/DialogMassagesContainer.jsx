import React from "react";
import {addMessageCreator, addMessageTextCreator} from "../../../redux/dialogs-reducer";
import DialogMassages from "./DialogMassages";
import StoreContext from "../../../StoreContext";


const DialogMassagesContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let addMessage = () => {
                    store.dispatch(addMessageCreator())
                }

                let onAddMessageChange = (text) => {
                    let action = addMessageTextCreator(text);
                    store.dispatch(action)
                }

                return <DialogMassages addMessage={addMessage}
                                       onAddMessageChange={onAddMessageChange}
                                       state={state}/>

            }
        }
        </StoreContext.Consumer>

    )
}
export default DialogMassagesContainer