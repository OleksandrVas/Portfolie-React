import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import sideBarReducer from "./sideBarReducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    friendsMessages : friendsReducer,
    sideBar : sideBarReducer,
    usersPage : userReducer,
    auth : authReducer

})


let store = createStore(reducers) ;

window.store = store ;




export default store