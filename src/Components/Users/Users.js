import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
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