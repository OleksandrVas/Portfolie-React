import React from "react";
import classes from "./DialogsMassages.module.css";
import {Route} from "react-router-dom";
import Massage from "./Massage";


const DialogMassages = () => {
    return (
        <>
            <div className={classes.massages}>
                <Route path="/dialogs/Sasha" component={Massage}/>
                <Route path="/dialogs/Vlad" component={Massage }/>

            </div>
        </>
    )
}
export default DialogMassages