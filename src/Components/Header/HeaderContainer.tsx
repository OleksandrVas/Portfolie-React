import React from "react";
import {connect} from "react-redux";
import { logout} from "../../redux/auth-reducer";
import Header from "./Header";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<PropsType> {

    render() {
        return (
            <>
                <Header {...this.props} />
            </>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,

    }
}

export default compose(
    connect<MapStateToProps, MapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, {logout}),
)(HeaderContainer)

type MapStateToProps = {
    login: string | null,
    isAuth: boolean
}
type MapDispatchToProps = {
    logout: () => void
}
type OwnProps = {}

type PropsType = MapStateToProps & MapDispatchToProps & OwnProps