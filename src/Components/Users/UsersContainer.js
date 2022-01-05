import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followUser,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollowUser
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


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


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching : (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//
//
// }

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers, followUser,
        unFollowUser,
    })
)(UsersContainer)

// Как работает compose :мы передаем клас. комп. вторым вызовом ,
// далее идет цепочка снизу вверх -> WithAuthRedirect(UsersContainer) ->
//connect(mapStateToProps, {setCurrentPage,toggleFollowingInProgress,getUsers, followUser,unFollowUser,})(WithAuthRedirect(UsersContainer))
// то есть идет послеовательность действий