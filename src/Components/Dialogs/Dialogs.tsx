import React from "react";
import classes from "./Dialogs.module.css";
import DialogMassagesContainer from "./Message/DialogMassagesContainer";

type PropsType = {}
const Dialogs: React.FC<PropsType> = () => {

    return (
        <>
            <div className={classes.mainDialogsPage}>
                {/*<DialogsAll dialogsData={props.state.dialogPage.dialogsData} />*/}
                {/*<DialogMassagesContainer/>*/}
            </div>

        </>
    )
}
export default Dialogs