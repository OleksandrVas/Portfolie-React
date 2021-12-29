import React from "react";
import classes from "./DialogsMassages.module.css";
import MessageCreat from "./MessageCreat";
import DialogsForm from "./DialogsForm";

const DialogMassages = (props) => {

    return (
        <>
            <div className={classes.massages}>
                <MessageCreat state={props.state}/>
                <DialogsForm  addMessage={props.addMessage}/>
            </div>


        </>
    )
}
export default DialogMassages
