import React, {ReactNode} from "react";
import classes from "./DialogsMassages.module.css";

type PropsType = {
    messages : ReactNode
}
const Message : React.FC<PropsType> = ({messages}) => {

    return (
        <>
            <div className={classes.massage}>
                <div>{messages}</div>
            </div>
        </>


    )
}
export default Message
