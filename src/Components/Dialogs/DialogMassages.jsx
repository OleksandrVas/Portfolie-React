import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";


const DialogMassages = (props) => {
    return (
        <>
            <div className={classes.massages}>
                <Message message="demon hello"/>
                <Message message="Vlad kak ti"/>
                <Message message="Sasha i miss you too"/>
            </div>
        </>
    )
}
export default DialogMassages