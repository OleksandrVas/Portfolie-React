import React from "react";
import "./App.css";
import Profile from "../src/Components/Profile/Profile";
import Header from "../src/Components/Header/Header"
import Nav from "../src/Components/NavBar/Nav"
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = ({nameOfUser ,dialogsData , massages , postData}) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile nameOfUser={nameOfUser} postData={postData} />}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsData={dialogsData} massages={massages} />}/>
                    <Route path="/news" render={() => <Profile nameOfUser={nameOfUser} postData={postData} />}/>
                    <Route path="/music" render={() => <Dialogs dialogsData={dialogsData} massages={massages} /> }/>
                    <Route path="/settings" render={() => <Profile nameOfUser={nameOfUser} postData={postData} />}/>
                </div>

            </div>
        </BrowserRouter>

    );
};
export default App;
