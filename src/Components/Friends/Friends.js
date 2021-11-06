import React from "react";

const Friends = () => {
    let newTextsFriend = React.createRef()
    let addText = () => {
        let text = newTextsFriend.current.value
        alert(text)
    }
    return(
        <>
            <div>
                <textarea ref={newTextsFriend}></textarea>
                <div>
                    <button onClick={addText}>add Friend's messages</button>
                </div>
            </div>
        </>
    )
}

export default Friends