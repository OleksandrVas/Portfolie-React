const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch(action.type) {
        case ADD_MESSAGE :
            let addMessages = {
                id: 4,
                massage: state.newMessageText
            }
            state.massages.push(addMessages)
            state.newMessageText = ''
            return state
        case ADD_MESSAGE_TEXT :
            state.newMessageText = action.text;
            return state
        default :
            return state
    }

}
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const addMessageTextCreator = (text) => {
    return {
        type: ADD_MESSAGE_TEXT,
        text: text
    }
};

export default dialogsReducer