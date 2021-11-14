const ADD_FRIENDS_MESSAGE  = 'ADD-FRIENDS-MESSAGE';
const ADD_FRIENDS_MESSAGE_TEXT = 'ADD-FRIENDS-MESSAGE-TEXT'

const friendsReducer = (state , action ) => {
    switch (action.type) {
        case ADD_FRIENDS_MESSAGE :
            let newTextMessage = {
                id : 2 ,
                name : "Ivan" ,
                text : state.newMessageText,
            }
            state.messages.push(newTextMessage)
            state.newMessageText = ''
            return state

        case ADD_FRIENDS_MESSAGE_TEXT :
            state.newMessageText = action.newFriendText
            return state

        default :
            return state

    }
    return state;
}


export const  addMessageClick = () =>( {type :ADD_FRIENDS_MESSAGE });
export const onChangeMessageFriendText = (newFriendText) => {
    return {
        type : ADD_FRIENDS_MESSAGE_TEXT ,
        newFriendText : newFriendText
    }

}
export default friendsReducer