import React from "react";
import classes from "./Dialogs.module.css";
import DialogsAll from "./MainDialogs";
import DialogMassages from "./Message/DialogMassages";


const Dialogs = (props) => {

    return (
        <>
            <div className={classes.mainDialogsPage}>
                <DialogsAll dialogsData={props.state.dialogsData} />
                <DialogMassages massages={props.state.massages} dispatch={props.dispatch}
                                newMessageText={props.state.newMessageText}
                />
            </div>

        </>
    )
}
export default Dialogs