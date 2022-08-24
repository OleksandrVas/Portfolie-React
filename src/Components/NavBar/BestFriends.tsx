import React from "react";
import classes from "./Nav.module.css";


type PropsType = {
    img : string ,
    name : string
}
const BestFriends : React.FC<PropsType> = ({img,name}) => {

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