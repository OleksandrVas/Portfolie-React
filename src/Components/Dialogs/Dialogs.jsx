import React from "react";
import classes from "./Dialogs.module.css";
import DialogsAll from "./MainDialogs";
import DialogMassages from "./Message/DialogMassages";


const Dialogs = ({state , dispatch}) => {

    return (
        <>
            <div className={classes.mainDialogsPage}>
                <DialogsAll dialogsData={state.dialogsData} />
                <DialogMassages massages={state.massages} dispatch={dispatch}
                                newMessageText={state.newMessageText}
                />
            </div>

        </>
    )
}
export default Dialogs