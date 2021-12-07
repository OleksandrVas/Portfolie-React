import React from "react";
import "./App.css";
import Header from "../src/Components/Header/Header"
import Nav from "../src/Components/NavBar/Nav"
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={props.store.getState().sideBar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <ProfileContainer />}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.store.getState()}/>}/>
                <Route path="/users" render={() => <UsersContainer/>} />
                <Route path="/friends" render={() => <FriendsContainer />}/>
            </div>
        </div>
    );
};
export default App;
