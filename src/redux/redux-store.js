import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    friendsMessages : friendsReducer,
    sideBar : sideBarReducer
})


let store = createStore(reducers) ;




export default store