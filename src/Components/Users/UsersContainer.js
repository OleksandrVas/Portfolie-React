import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followUser,
    requestUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollowUser
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
                   followUser={this.props.followUser}
                   unFollowUser={this.props.unFollowUser}


            />

        </>

    }
}

//
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}





export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers: requestUsers, followUser,
        unFollowUser,
    })
)(UsersContainer)

// Как работает compose :мы передаем клас. комп. вторым вызовом ,
// далее идет цепочка снизу вверх -> WithAuthRedirect(UsersContainer) ->
//connect(mapStateToProps, {setCurrentPage,toggleFollowingInProgress,getUsers, followUser,unFollowUser,})(WithAuthRedirect(UsersContainer))
// то есть идет послеовательность действий