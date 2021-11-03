import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";


const DialogMassages = (props) => {
    let massages = [
        {id: 1, massage: "demon hello"},
        {id: 2, massage: "Vlad kak ti"},
        {id: 3, massage: "Sasha i miss you too"},
    ]
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