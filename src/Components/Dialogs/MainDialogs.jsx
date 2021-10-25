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
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
    //     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>,
    //
    // ]



    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>

                </div>

            </div>
        </>
    )

}
export default DialogsAll