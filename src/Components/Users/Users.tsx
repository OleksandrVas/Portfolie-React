import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import classes from "./users.module.css";
import User from "./User";
import {UserType} from "../../types/types";
import {UserSearchForm} from "./UserSearchForm/UsersSearchForm";
import {FilterType} from "../../redux/users-reducer";
type PropsType = {
    onFilterChanged: (filter : FilterType) => void,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    totalUsersCount: number,
    pageSize: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    followUser: (userId: number) => void,
    unFollowUser: (userId: number) => void
}

const Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize,onFilterChanged, users, ...props}) => {
    return (
        <div className={classes.positionUsersDisplay}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            <UserSearchForm onFilterChanged={onFilterChanged}/>
            <div>
                {
                    users.map(users => <User key={users.id}
                                             users={users}
                                             followingInProgress={props.followingInProgress}
                                             followUser={props.followUser}
                                             unFollowUser={props.unFollowUser}/>
                    )
                }
            </div>
        </div>
    )

}


export default Users

