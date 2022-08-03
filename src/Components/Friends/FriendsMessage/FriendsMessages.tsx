import * as React from "react";

interface FriendsMessagesType {
    name: string | null,
    text: string | null,
    id: number | null
}

const FriendsMessages: React.FC<FriendsMessagesType> = ({name, text, id}) => {
    return (
        <>
            <div>{name} : {text}</div>
        </>
    )
}
export default FriendsMessages