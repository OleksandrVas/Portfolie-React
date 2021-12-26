import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsers} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 21166
        }
        this.props.getUsers(userId)
    }

    render() {

        return (
            <>

                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, {getUsers}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)



