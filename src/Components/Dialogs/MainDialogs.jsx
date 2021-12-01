import React from "react";
import classes from "./MainDialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";

const DialogsAll = (props) => {

    let dialogsElements = props.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} img={dialog.img}/> )

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