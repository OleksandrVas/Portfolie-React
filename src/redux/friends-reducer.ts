import {BaseThunkType, InferActionsTypes} from "./redux-store";


type MessagesType = {
    id: number,
    name: string,
    text: string
}

let initialState = {
    messages: [
        {
            id: 1,
            name: "Sasha",
            text: "Hi"
        }
    ] as Array<MessagesType>
}

export type InitialStateType = typeof initialState


const friendsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "IT/FRIENDS/ADD_FRIEND_MESSAGE" : {
            let newFriendMessage = {
                id: 3,
                name: "Vlad",
                text: action.newFriendsMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newFriendMessage]
            }
        }
        default :
            return state
    }
    return state
}


type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkActionsType = BaseThunkType<ActionsTypes>

export const actions = {
    addFriendsMessage: (newFriendsMessageText: string) => ({type: "IT/FRIENDS/ADD_FRIEND_MESSAGE", newFriendsMessageText} as const )
}


export default friendsReducer