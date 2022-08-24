import React from "react";
import classes from "./Nav.module.css"

import BestFriends from "./BestFriends";
import NavBarLink from "./NavBarLink";

type PropsType = {

}

const Nav : React.FC<PropsType> = (props) => {
    // let bestFriend =
    //     props.state.bestFriends
    //         .map(user => <BestFriends
    //             name={user.name}
    //             img={user.img}
    //             key={user.id}
    //
    //         />)
    return (
        <>
            <nav className={classes.nav}>
                <NavBarLink to={"/profile"} text={"Profile"}/>
                <NavBarLink to={"/dialogs"} text={"Messages"}/>
                <NavBarLink to={"/users"} text={"Find User"}/>
                <NavBarLink to={"/news"} text={"News"}/>
                <NavBarLink to={"/music"} text={"Music"}/>
                <NavBarLink to={"/settings"} text={"Settings"}/>
                <NavBarLink to={"/friends"} text={"Friends"}/>
                {/*<div className={classes.icon}>{bestFriend}</div>*/}
            </nav>
        </>
    );
};

export default Nav