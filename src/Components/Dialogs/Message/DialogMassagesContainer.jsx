import React from "react";
import {addMessage, addMessageText} from "../../../redux/dialogs-reducer";
import DialogMassages from "./DialogMassages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state,
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageCreator())
//         },
//         onAddMessageChange: (text) => {
//             let action = addMessageTextCreator(text);
//             dispatch(action)
//         }
//     }
//
// }


const DialogMassagesContainer = connect(mapStateToProps, {addMessage,addMessageText})(DialogMassages)


export default DialogMassagesContainer