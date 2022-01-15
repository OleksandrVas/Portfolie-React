import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Header from "./Header";
import {compose} from "redux";




class HeaderContainer extends React.Component {

    render() {
        return (
            <>
                <Header {...this.props} />
            </>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        login : state.auth.login,
        isAuth : state.auth.isAuth,

    }
}

export default compose(
    connect(mapStateToProps, {logout}),
)(HeaderContainer)


