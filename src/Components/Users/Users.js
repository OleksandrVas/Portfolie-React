import React from "react";
import classes from "./users.module.css";
import userDefaultPhoto from "../../assets/img/defaultUserImg.png";
import {NavLink} from "react-router-dom";
import {FollowApi, unFollowApi} from "../../api/api";
import {toggleFollowingInProgress} from "../../redux/users-reducer";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p && classes.selecetedPage}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>{p}</span>
                    )
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                        <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto}
                                 className={classes.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                props.toggleFollowingInProgress(true, u.id)

                                FollowApi.follow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 1) {
                                            props.unFollow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false , u.id)
                                    })


                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingInProgress(false, u.id)
                                unFollowApi.unfollow(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(true, u.id)
                                    }

                            )


                            }}>follow</button>}

                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                        <div/>

                    </div>
                )
            }
        </div>
    )
}

export default Users