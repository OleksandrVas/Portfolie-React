import React from "react";
import classes from "./Dialogs.module.css";
import DialogsAll from "./MainDialogs";
import DialogMassages from "./Message/DialogMassages";


const Dialogs = ({state}) => {

    return (
        <>
            <div className={classes.mainDialogsPage}>
                <DialogsAll dialogsData={state.dialogsData} />
                <DialogMassages massages={state.massages}/>
            </div>

        </>
    )
}
export default Dialogs