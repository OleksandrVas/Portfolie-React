import React from "react";
import classes from "./MainDialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsAll = () => {
    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/Sasha" activeClassName={classes.active}>Sasha</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/Vlada" activeClassName={classes.active}>Vlad</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/Dimas" activeClassName={classes.active}>Dimas</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/Pavel" activeClassName={classes.active}>Pavel</NavLink>
                    </div>

                </div>

            </div>
        </>
    )

}
export default DialogsAll