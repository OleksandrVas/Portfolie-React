import React from "react";
import {addMessage} from "../../../redux/dialogs-reducer";
import DialogMassages from "./DialogMassages";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../HOC/WithAuthRedirect";
import {compose} from "redux";



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
let mapStateToProps = (state) => {
    return {
        state: state,
    }
};


export default compose(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect
)(DialogMassages)