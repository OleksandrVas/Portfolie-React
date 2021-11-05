import React from "react";
import classes from "./Nav.module.css"
import {NavLink} from "react-router-dom";

import BestFriends from "./BestFriends";

const Nav = ({state}) => {

    let bestFriend =
        state.bestFriends
            .map(user => <BestFriends
                name={user.name}
                img={user.img}

            />)
    return (
        <>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/friends" id={classes.itemFriend} activeClassName={classes.active}>Friends</NavLink>
                    <div className={classes.icon}>
                        {bestFriend}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav