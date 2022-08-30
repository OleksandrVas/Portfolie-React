import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";
import { actions } from "../../redux/friends-reducer";
import { AppStateType } from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
  return {
    messages: state.friendsMessages.messages,
  };
};

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

const FriendsContainerContainer = connect<
  MapStToProps,
  MapDispatchToProps,
  OwnProps,
  AppStateType
>(
  mapStateToProps,
  actions.addFriendsMessage
)(Friends);

export default FriendsContainerContainer;

type MapStToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = {};
type OwnProps = {};
