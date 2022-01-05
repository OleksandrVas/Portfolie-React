import React from "react";
import classes from "./users.module.css";
import userDefaultPhoto from "../../assets/img/defaultUserImg.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    debugger
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
                                props.followUser(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unFollowUser(u.id)
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