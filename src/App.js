import React from "react";
import "./App.css";
import Profile from "../src/Components/Profile/Profile";
import Header from "../src/Components/Header/Header"
import Nav from "../src/Components/NavBar/Nav"
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import FriendsContainer from "./Components/Friends/FriendsContainer";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={props.state.sideBar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile state={props.state} store={props.store}/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.state}/>}/>
                <Route path="/news" render={() => <Profile />}/>
                <Route path="/music" render={() => <Dialogs />}/>
                <Route path="/settings" render={() => <Profile />}/>
                <Route path="/friends" render={() => <FriendsContainer />}/>
            </div>
        </div>
    );
};
export default App;
