const ADD_FRIEND_MESSAGE = 'ADD-FRIEND-MESSAGE'
const ADD_FRIEND_MESSAGE_TEXT = 'ADD-FRIEND-MESSAGE-TEXT';

let initialState = {
    messages: [
        {
            id: 1,
            name: "Sasha",
            text: "Hi"
        },
    ],
    newFriendsMessageText: '',
}
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND_MESSAGE : {
            let newFriendMessage = {
                id: 2,
                name: "Vlad",
                text: state.newFriendsMessageText,
            };
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newFriendMessage);
            state.newFriendsMessageText = ''
            return stateCopy
        }
        case   ADD_FRIEND_MESSAGE_TEXT : {
let stateCopy = {...state}
            stateCopy.newFriendsMessageText = [...state.newFriendsMessageText]
            stateCopy.newFriendsMessageText = action.newFriendsMessageText
            return stateCopy
        }
        default :
            return state
    }
    return state
}

export const addFriendsMessage = () => ({type: ADD_FRIEND_MESSAGE});
export const addFriendsMessageText = (text) => {
    return {
        type: ADD_FRIEND_MESSAGE_TEXT,
        newFriendsMessageText: text
    }
}

export default friendsReducer