import React from "react";
import "./App.css";
import Nav from "../src/Components/NavBar/Nav"
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, withRouter} from "react-router-dom";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/UserLogin/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav state={this.props.store.getState().sideBar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={this.props.store.getState()}/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/friends" render={() => <FriendsContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized : state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
