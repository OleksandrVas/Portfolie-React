import React from "react";
import classes from "./Dialogs.module.css";
import DialogsAll from "./MainDialogs";
import DialogMassages from "./Message/DialogMassages";


const Dialogs = ({state , addMessage , addMessageText}) => {

    return (
        <>
            <div className={classes.mainDialogsPage}>
                <DialogsAll dialogsData={state.dialogsData} />
                <DialogMassages massages={state.massages} addMessage={addMessage} addMessageText={addMessageText}
                                newMessageText={state.dialogsData.newMessageText}
                />
            </div>

        </>
    )
}
export default Dialogs