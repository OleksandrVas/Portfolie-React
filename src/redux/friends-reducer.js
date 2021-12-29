const ADD_FRIEND_MESSAGE = 'ADD-FRIEND-MESSAGE'


let initialState = {
    messages: [
        {
            id: 1,
            name: "Sasha",
            text: "Hi"
        },
    ]
}
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND_MESSAGE : {
            let newFriendMessage = {
                id: 2,
                name: "Vlad",
                text: action.newFriendsMessageText,
            };
            return {
                ...state,
                messages : [...state.messages , newFriendMessage]
            }
        }
        default :
            return state
    }
    return state
}

export const addFriendsMessage = (newFriendsMessageText) => ({type: ADD_FRIEND_MESSAGE ,newFriendsMessageText});


export default friendsReducer