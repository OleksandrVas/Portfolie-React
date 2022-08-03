import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import classes from "./users.module.css";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    currentPage : number,
    onPageChanged : (pageNumber : number) => void,
    totalUsersCount : number,
    pageSize : number,
    users : Array<UserType> ,
    followingInProgress : Array<number>,
    followUser : (userId : number) => void,
    unFollowUser : (userId : number) => void
}

const Users : React.FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div className={classes.positionUsersDisplay}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
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