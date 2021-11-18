import React from "react";
import {addMessageCreator, addMessageTextCreator} from "../../../redux/dialogs-reducer";
import DialogMassages from "./DialogMassages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        onAddMessageChange: (text) => {
            let action = addMessageTextCreator(text);
            dispatch(action)
        }
    }

}


const DialogMassagesContainer = connect(mapStateToProps, mapDispatchToProps)(DialogMassages)


export default DialogMassagesContainer