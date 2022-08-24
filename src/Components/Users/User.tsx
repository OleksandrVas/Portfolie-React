import React from "react";
import classes from "./users.module.css";
import userDefaultPhoto from "../../assets/img/defaultUserImg.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

const User : React.FC<PropsType> = ({users, followUser, unFollowUser, followingInProgress, ...props}) => {
    return (
        <div>
            <span>
                    <div>
                        <NavLink to={"/profile/" + users.id}>
                            <img src={users.photos.small != null ? users.photos.small : userDefaultPhoto}
                                 className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {users.followed
                            ? <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {
                                followUser(users.id)
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {
                                unFollowUser(users.id)
                            }}>follow</button>}

                    </div>
            </span>
            <span>
                    <span>
                        <div>{users.name}</div>
                        <div>{users.status}</div>
                    </span>
                    <span>
                        <div>{"users.location.country"}</div>
                        <div>{"users.location.city"}</div>
                    </span>
                </span>
            <div/>

        </div>
    )
}

export default User


type PropsType = {
    users : UserType,
    followUser : (id : number) => void
    unFollowUser : (id : number) => void,
    followingInProgress: Array<number>
}