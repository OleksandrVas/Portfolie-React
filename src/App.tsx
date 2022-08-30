import React from "react";
import "./App.css";
import Nav from "../src/Components/NavBar/Nav";
import {BrowserRouter, Redirect, Route, Switch, withRouter,} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Dialogs from "./Components/Dialogs/Dialogs";
import {UsersPage} from "./Components/Users/UsersPage";
import {LoginPage} from "./Components/UserLogin/Login";
// lazyLoading
const FriendsContainer = React.lazy(
  () => import("./Components/Friends/FriendsContainer")
);

//
type MapPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsTypes = {
  initializeApp: () => void;
};

class App extends React.Component<MapPropsType & MapDispatchPropsTypes> {
  catchAllUnhandledRejection = (event: PromiseRejectionEvent) => {
    alert("Some Error ");
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener(
      "unhandledrejection",
      this.catchAllUnhandledRejection
    );
  }

  componentWillUnmount() {
    window.addEventListener(
      "unhandledrejection",
      this.catchAllUnhandledRejection
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <React.Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
              <Route path="/" exact>
                {" "}
                <Redirect to="/profile" />{" "}
              </Route>
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/dialogs" render={() => <Dialogs />} />
              <Route path="/users" render={() => <UsersPage />} />
              <Route path="/friends" render={() => <FriendsContainer />} />
              <Route path="/login" render={() => <LoginPage />} />
              <Route path="*" render={() => <div> 404 NOT FOUND </div>} />
            </Switch>
          </React.Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  sideBar: state.sideBar.bestFriends,
  captchaUrl: state.auth.captchaUrl,
});

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

let SamuraiAppJs: React.FC<React.ReactNode> = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiAppJs as any;
