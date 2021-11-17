import React from "react";
import "./App.css";
import Profile from "../src/Components/Profile/Profile";
import Header from "../src/Components/Header/Header"
import Nav from "../src/Components/NavBar/Nav"
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Friends from "./Components/Friends/Friends";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav state={props.state.sideBar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}
                                                              store={props.store}
                                                              dispatch={props.dispatch}
                                                              newPostText={props.state.profilePage.newPostText}
                />}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage} dispatch={props.dispatch} store={props.store}/>}/>
                <Route path="/news" render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path="/music" render={() => <Dialogs state={props.state.dialogPage}/>}/>
                <Route path="/settings" render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path="/friends" render={() => <Friends state={props.state.friendsMessages} dispatch={props.dispatch}
                                                              newFriendsMessageText={props.state.friendsMessages.newFriendsMessageText} />}/>
            </div>
        </div>
    );
};
export default App;
