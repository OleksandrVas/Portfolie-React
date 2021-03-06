import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./DialogsItem.module.css"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id ;
    return (
        <>
            <div className={classes.dialog}>
                <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
                <img className={classes.dialogIcon} src={props.img} />
            </div>
        </>
    )
}
export default DialogItem