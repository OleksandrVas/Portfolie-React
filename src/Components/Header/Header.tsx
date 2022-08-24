import React from "react";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";



const Header : React.FC<PropsType> = ({isAuth = false ,login,logout}) => {
  return (
      <div className={classes.header}>
        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01104710/1267.png"></img>
          <div className={classes.loginBlock}>
              {isAuth ?
                  <div>{login} <button onClick={logout}>Log out</button> </div>
                  : <NavLink to={"/login"} > Login </NavLink>}
          </div>
      </div>
  );
};
export default Header

type PropsType = {
    isAuth : boolean ,
    login : string | null,
    logout : () => void ,
}