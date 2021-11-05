import React from "react";
import "./App.css";
import Profile from "../src/Components/Profile/Profile";
import Header from "../src/Components/Header/Header"
import Nav from "../src/Components/NavBar/Nav"
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = ({state}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={state.sideBar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile state={state.profilePage}/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={state.dialogPage}/>}/>
                <Route path="/news" render={() => <Profile state={state.profilePage}/>}/>
                <Route path="/music" render={() => <Dialogs state={state.dialogPage}/>}/>
                <Route path="/settings" render={() => <Profile state={state.profilePage}/>}/>
                <Route path="/friend" render={() => <Profile state={state.profilePage}/>}/>
            </div>
        </div>
    );
};
export default App;
