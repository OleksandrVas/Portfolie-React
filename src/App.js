import React, {lazy} from "react";
import "./App.css";
import Nav from "../src/Components/NavBar/Nav"
import {HashRouter , Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Dialogs from "./Components/Dialogs/Dialogs";
// lazyLoading
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'))
const FriendsContainer = React.lazy(() => import('./Components/Friends/FriendsContainer'))
const Login = React.lazy(() => import('./Components/UserLogin/Login'))
//
class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav state={this.props.store.getState().sideBar}/>
                <div className="app-wrapper-content">
                    <React.Suspense fallback={<div>Загрузка...</div>}>
                            <Route  path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => <Dialogs state={this.props.store.getState()}/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/friends" render={() => <FriendsContainer/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiAppJs = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer store={store}/>
        </Provider>
    </HashRouter>
}

export default SamuraiAppJs