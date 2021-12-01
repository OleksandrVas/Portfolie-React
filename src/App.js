import React from "react";
import "./App.css";
import Profile from "../src/Components/Profile/Profile";
import Header from "../src/Components/Header/Header"
import Nav from "../src/Components/NavBar/Nav"
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import Users from "./Components/Users/Users";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={props.store.getState().sideBar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.store.getState()}/>}/>
                <Route path="/users" render={() => <Users/>} />
                <Route path="/friends" render={() => <FriendsContainer />}/>
            </div>
        </div>
    );
};
export default App;
