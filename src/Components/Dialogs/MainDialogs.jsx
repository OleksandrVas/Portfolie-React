import React from "react";
import classes from "./MainDialogs.module.css";
import DialogItem from "./DialogItem";

const DialogsAll = () => {
    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem name="Sasha" id="1"/>
                    <DialogItem name="Vlad" id="2"/>
                    <DialogItem name="Igor" id="3"/>
                    <DialogItem name="Pavel" id="4"/>
                </div>

            </div>
        </>
    )

}
export default DialogsAll