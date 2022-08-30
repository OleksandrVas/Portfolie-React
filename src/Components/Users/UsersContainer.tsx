import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    FilterType,
    followUser,
    requestUsers,
    unFollowUser
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFilter,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize, {friend: null, term: ""})
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNumber, pageSize, filter)
    }
    onFilterChanged: (filter: FilterType) => void = (filter) => {
        const {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onFilterChanged={this.onFilterChanged}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   followUser={this.props.followUser}
                   unFollowUser={this.props.unFollowUser}
            />

        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getUsers(state),
        filter: getFilter(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

// @ts-ignore
export default compose(
    connect<MapStateToProps, MapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, {
        getUsers: requestUsers,
        followUser,
        unFollowUser,
    }))(UsersContainer) as React.ComponentType


type OwnProps = {
    title: string,
}
type MapStateToProps = {
    pageSize: number,
    filter: FilterType,
    currentPage: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
}
type MapDispatchToProps = {
    followUser: (userId: number) => void,
    unFollowUser: (userId: number) => void,
    getUsers: (pageNumber: number, pageSize: number, filter: FilterType) => void,
}
type PropsType = MapDispatchToProps & MapStateToProps
// IntrinsicAttributes
// Как работает compose :мы передаем клас. комп. вторым вызовом ,
// далее идет цепочка снизу вверх -> WithAuthRedirect(UsersContainer) ->
//connect(mapStateToProps, {setCurrentPage,toggleFollowingInProgress,getUsers, followUser,unFollowUser,})(WithAuthRedirect(UsersContainer))
// то есть идет послеовательность действий