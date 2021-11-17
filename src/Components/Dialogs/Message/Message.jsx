import React from "react";
import classes from "./DialogsMassages.module.css";

const Message = (props) => {

    return (
        <>
            <div className={classes.massage}>
                <div >{props.message}</div>
            </div>
        </>


    )
}
export default Message
