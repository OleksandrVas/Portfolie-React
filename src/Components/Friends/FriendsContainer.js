import React from "react";
import {addFriendsMessage} from "../../redux/friends-reducer";
import Friends from "./Friends";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         onAddButtonClick: () => {
//             dispatch(addFriendsMessage())
//         },
//         onAddChangeArea: (text) => {
//             let action = addFriendsMessageText(text);
//             dispatch(action)
//         }
//     }
// }

const FriendsContainerContainer = connect(mapStateToProps, {addFriendsMessage })(Friends)


export default FriendsContainerContainer