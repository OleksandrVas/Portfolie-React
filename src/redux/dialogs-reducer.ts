const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogsType = {
    id: number | null,
    name: string | null,
    img: string | null
}
type MessagesType = {
    id: number,
    massage: string
}

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
    ] as Array<DialogsType>,
    massages: [
        {id: 1, massage: "demon hello"},
        {id: 2, massage: "Vlad kak ti"},
        {id: 3, massage: "Sasha i miss you too"},
    ] as Array<MessagesType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {


    switch (action.type) {
        case ADD_MESSAGE : {
            let addMessages = {
                id: 4,
                massage: action.dialogForm
            }
            return {
                ...state,
                massages: [...state.massages, addMessages],
            }
        }

        default :
            return state
    }

}

type ActionsTypes = AddMessageActionType

type AddMessageActionType = {
    type: typeof ADD_MESSAGE,
    dialogForm: string
}


export const addMessage = (dialogForm: string): AddMessageActionType => ({type: ADD_MESSAGE, dialogForm});


export default dialogsReducer