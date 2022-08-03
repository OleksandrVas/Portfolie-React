import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsers, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {RouteProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
import {match} from "assert";


type MapStateToProps = {
    authorisedUserId: number | null,
    profile: ProfileType | null
    status: string | null

}
type StateProps = {}

type MapDispatchToProps = {
    updateStatus: (status: string) => void,
    saveProfile: (profile: ProfileType) => void,
    savePhoto: (file: HTMLImageElement) => void,
    getUsers: (userId: number) => void,
    getStatus: (userId: number) => void,
}
type OwnProps = {
    color: string
}
type PropsType = MapStateToProps & MapDispatchToProps & OwnProps

class ProfileContainer extends React.Component<PropsType, StateProps> {


    refreshProfile = () => {
        // @ts-ignore
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId
            if (!userId) {
                // @ts-ignore
                this.props.history.push("/login")
            }
        }
        this.props.getUsers(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateProps) {
        // if( this.props.match.params.userId !== prevProps.match.params.userId){
        //     this.refreshProfile()
        // }
    }

    render() {


        return (
            <>
                <Profile saveProfile={this.props.saveProfile}
                         savePhoto={this.props.savePhoto}
                    // @ts-ignore
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserId: state.auth.userId,
    }

}

export default compose(
    connect<MapStateToProps, MapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, {
        getUsers,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)


