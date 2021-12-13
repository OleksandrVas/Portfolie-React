import React from "react";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import Header from "./Header";
import { usersApi} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        usersApi.authMe()
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email)
                }

            })
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
        isAuth: state.auth.isAuth,
        login : state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)


