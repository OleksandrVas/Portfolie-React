import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import sideBarReducer from "./sideBarReducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsMessages: friendsReducer,
    sideBar: sideBarReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer

})


export type InferActionsTypes<T> =T extends {[key : string] :(...args : any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>, S = AppStateType, E = unknown > = ThunkAction<R, S, E, A>


type RootReducersType = typeof reducers // создаем корнеовй редюсер
export type AppStateType = ReturnType<RootReducersType> // дальше возвращаем эти редюсеры
// @ts-ignore

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)
));

// @ts-ignore
window.store_ = store;


export default store