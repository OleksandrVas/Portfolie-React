const  ADD_FRIEND_MESSAGE = 'ADD-FRIEND-MESSAGE'
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
const friendsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ADD_FRIEND_MESSAGE :
            let newFriendMessage = {
                id : 2 ,
                name : "Vlad" ,
                text : state.newFriendsMessageText,
            };
            state.messages.push(newFriendMessage);
            state.newFriendsMessageText=''
            return state


        case   ADD_FRIEND_MESSAGE_TEXT :
            state.newFriendsMessageText=action.newFriendsMessageText
            return state
        default :
            return state
    }
    return state
}

export const addFriendsMessage = () => ({type:ADD_FRIEND_MESSAGE});
export const addFriendsMessageText = (text ) => {
    return {
        type : ADD_FRIEND_MESSAGE_TEXT ,
        newFriendsMessageText : text
    }
}

export default friendsReducer