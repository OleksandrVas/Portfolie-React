import React from "react";
import classes from "./DialogsMassages.module.css";
import DialogsForm from "./DialogsForm";
import {InitialStateType, MessagesType} from "../../../redux/dialogs-reducer";

type PropsType = {
    dialogPage : InitialStateType
    addMessage : (dialogForm : string) => void,
    handleSubmit : any
}

const DialogMassages : React.FC<PropsType> = ({dialogPage , addMessage , handleSubmit}) => {
    let messageElement = dialogPage.massages.map( (m) => <div>messages : {m.massage}</div>)

    return (
        <>
            <div className={classes.massages}>
                <DialogsForm  addMessage={addMessage} handleSubmit={handleSubmit}/>
            </div>


        </>
    )
}
export default DialogMassages
