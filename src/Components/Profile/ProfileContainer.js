import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsers, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId
        }
        this.props.getUsers(userId)
        this.props.getStatus(userId)

    }

    render() {

        return (
            <>

                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </>
        )
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status : state.profilePage.status,
        authorisedUserId : state.auth.userId,
        isAuth : state.auth.isAuth
    }

}

export default compose(
    connect(mapStateToProps, {getUsers,getStatus,updateStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)



