import React from "react";
import classes from "./Dialogs.module.css";
import DialogsAll from "./MainDialogs";
import DialogMassages from "./Message/DialogMassages";


const Dialogs = ({dialogsData, massages}) => {

    return (
        <>
            <div className={classes.mainDialogsPage}>
                <DialogsAll dialogsData={dialogsData} />
                <DialogMassages massages={massages}/>
            </div>

        </>
    )
}
export default Dialogs