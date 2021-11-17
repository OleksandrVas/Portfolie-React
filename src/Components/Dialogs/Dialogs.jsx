import React from "react";
import classes from "./Dialogs.module.css";
import DialogsAll from "./MainDialogs";
import DialogMassagesContainer from "./Message/DialogMassagesContainer";


const Dialogs = (props) => {
    return (
        <>
            <div className={classes.mainDialogsPage}>
                <DialogsAll dialogsData={props.state.dialogsData} />
                <DialogMassagesContainer store={props.store}
                />
            </div>

        </>
    )
}
export default Dialogs