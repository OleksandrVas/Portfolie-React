import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";


const DialogMassages = (props) => {
    let massagesData = [
        {id: 1, massage: "demon hello"},
        {id: 2, massage: "Vlad kak ti"},
        {id: 3, massage: "Sasha i miss you too"},
    ]
    return (
        <>
            <div className={classes.massages}>
                <Message message={massagesData[1].massage} id={massagesData[1].id}/>
                <Message message={massagesData[0].massage} id={massagesData[0].id}/>
                <Message message={massagesData[2].massage} id={massagesData[2].id}/>
            </div>
        </>
    )
}
export default DialogMassages