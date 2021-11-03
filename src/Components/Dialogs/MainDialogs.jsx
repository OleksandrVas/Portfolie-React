import React from "react";
import classes from "./MainDialogs.module.css";
import DialogItem from "./DialogItem";

const DialogsAll = () => {
    let dialogsData = [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Vlad"},
        {id: 3, name: "Igor"},
        {id: 4, name: "Pavel"}
    ]
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