import React from "react";
import DialogMassages from "./DialogMassages";
import {actions, InitialStateType, MessagesType} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToProps = {
    dialogPage : InitialStateType
}
type MapDispatchToProps = {

}
type OwnProps = {
    addMessage : () =>void
}

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
// }w


let mapStateToProps = (state : AppStateType) => {
    return {
        dialogPage: state.dialogPage
    }
};


export default compose(
    connect<MapStateToProps , MapDispatchToProps  , OwnProps , AppStateType>(mapStateToProps, {addMessage : actions.addMessage}),
    WithAuthRedirect
)(DialogMassages)