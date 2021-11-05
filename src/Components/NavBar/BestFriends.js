import React from "react";
import classes from "./Nav.module.css";
const BestFriends = ({img,name}) => {

    return (
        <>
            <div className={classes.iconItem}>
                <img
                    src={img}/>
                <div>{name}</div>
            </div>
        </>
    )
}
export default BestFriends