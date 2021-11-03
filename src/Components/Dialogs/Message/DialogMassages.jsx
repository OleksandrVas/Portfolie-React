import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";


const DialogMassages = ({massages}) => {
    let massagesElements =
        massages
            .map( d => <Message message={d.massage} id={d.id}/> )

    return (
        <>
            <div className={classes.massages}>
                {massagesElements}
            </div>
        </>
    )
}
export default DialogMassages