import React from "react";
import {connect} from "react-redux";
import { setUsers} from "../../redux/auth-reducer";
import Header from "./Header";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setUsers()
    }

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
        isAuth : state.auth.isAuth
    }
}





export default compose(
    connect(mapStateToProps, {setUsers}),
)(HeaderContainer)


