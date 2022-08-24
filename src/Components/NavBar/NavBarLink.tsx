import React from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    to : string,
    text : string
}
const NavBarLink : React.FC<PropsType> = ({to,text}) =>{
    return (
        <>
            <div className={classes.item}>
                <NavLink to={to} activeClassName={classes.active} >{text}</NavLink>
            </div>

        </>
    )
}
export default NavBarLink