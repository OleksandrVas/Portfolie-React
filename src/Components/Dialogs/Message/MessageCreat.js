import React from "react";
import Message from "./Message";

const MessageCreat = (props) => {

    let massagesElements =
        props.state.dialogPage.massages
            .map( d => <Message message={d.massage} id={d.id} key={d.id}/> )
    return (
        <>
            {massagesElements}
        </>
    )
}
export default MessageCreat