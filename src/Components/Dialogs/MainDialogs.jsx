import React from "react";
import classes from "./MainDialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";

const DialogsAll = ({dialogsData}) => {

    let dialogsElements = dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> )


    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>

            </div>
        </>
    )

}
export default DialogsAll