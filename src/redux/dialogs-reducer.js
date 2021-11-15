const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Sasha",
            img: "https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png"
        },
        {
            id: 2,
            name: "Vlad",
            img: "https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png"
        },
        {
            id: 3,
            name: "Igor",
            img: "https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png"
        },
        {
            id: 4,
            name: "Pavel",
            img: "https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png"
        }
    ],
    massages: [
        {id: 1, massage: "demon hello"},
        {id: 2, massage: "Vlad kak ti"},
        {id: 3, massage: "Sasha i miss you too"},
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

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