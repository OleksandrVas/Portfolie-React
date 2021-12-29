const ADD_MESSAGE = 'ADD-MESSAGE';


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
    ]
}

const dialogsReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_MESSAGE : {
            let addMessages = {
                id: 4,
                massage: action.dialogForm
            }
            return {
                ...state,
                massages : [...state.massages,addMessages],
            }
        }

        default :
            return state
    }

}
export const addMessage = (dialogForm) => ({type: ADD_MESSAGE , dialogForm});


export default dialogsReducer