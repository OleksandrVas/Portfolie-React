import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsers, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
   refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUsers(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if( this.props.match.params.userId !== prevProps.match.params.userId){
           this.refreshProfile()
       }
    }
    render() {
        return (
            <>
                <Profile saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId } {...this.props} profile={this.props.profile} status={this.props.status}  updateStatus={this.props.updateStatus}/>
            </>
        )
    }

}
// let mapStateToProps = (state) => {
//     return {
//         profile: state.profilePage.profile,
//         status : state.profilePage.status,
//         authorisedUserId : state.auth.userId,
//         isAuth : state.auth.isAuth
//     }
//
// }
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status : state.profilePage.status,
        authorisedUserId : state.auth.userId,
        isAuth : state.auth.isAuth
    }

}

export default compose(
    connect(mapStateToProps, {getUsers,getStatus,updateStatus ,savePhoto , saveProfile}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)



