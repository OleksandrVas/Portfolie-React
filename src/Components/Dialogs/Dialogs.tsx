import React from "react";
import classes from "./Dialogs.module.css";
import DialogsAll from "./MainDialogs";
import DialogMassagesContainer from "./Message/DialogMassagesContainer";

type PropsType = {

}
const Dialogs : React.FC<PropsType> = (props) => {

    return (
        <>
            <div className={classes.mainDialogsPage}>
                {/*<DialogsAll dialogsData={props.state.dialogPage.dialogsData} />*/}
                <DialogMassagesContainer
                />
            </div>

        </>
    )
}
export default Dialogs