import React from "react";
import "./App.css";
import Nav from "../src/Components/NavBar/Nav"
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/UserLogin/Login";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Nav state={props.store.getState().sideBar}/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.store.getState()}/>}/>
                <Route path="/users" render={() => <UsersContainer/>} />
                <Route path="/friends" render={() => <FriendsContainer />}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>
    );
};
export default App;
