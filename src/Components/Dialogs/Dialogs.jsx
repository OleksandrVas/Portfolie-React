import React from "react";
import classes from "./Dialogs.module.css";
import DialogsAll from "./MainDialogs";
import DialogMassages from "./DialogMassages";
import {BrowserRouter} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <>
            <BrowserRouter>
                <div className={classes.mainDialogsPage}>
                    <DialogsAll/>
                    <DialogMassages/>
                </div>
            </BrowserRouter>

        </>
    )
}
export default Dialogs