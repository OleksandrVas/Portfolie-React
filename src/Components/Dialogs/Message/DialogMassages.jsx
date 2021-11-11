import React from "react";
import classes from "./DialogsMassages.module.css";
import Message from "./Message";


const DialogMassages = ({dispatch, newMessageText , massages}) => {

    let newMessage = React.createRef();

    let onAddMessage = () => {
        dispatch({type:'ADD-MESSAGE'})
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        dispatch({type:'ADD-MESSAGE-TEXT' , text:text });
    }


    let massagesElements =
        massages
            .map( d => <Message message={d.massage} id={d.id}/> )

    return (
        <>
            <div className={classes.massages}>
                {massagesElements}
                <textarea ref={newMessage} value={newMessageText} onChange={onMessageChange} />
                <div><button onClick={onAddMessage} >add message</button></div>
            </div>
        </>
    )
}
export default DialogMassages