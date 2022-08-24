import {BaseThunkType, InferActionsTypes} from "./redux-store";


type BestFriends = {
    id: number,
    name: string,
    img: string
}

let initialState = {
    bestFriends: [
        {
            id: 1,
            name: "Vlad",
            img: "https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png"
        },
        {
            id: 2,
            name: "Sasha",
            img: "https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png"
        },
        {
            id: 3,
            name: "Pasha",
            img: "https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png"
        },

    ] as Array<BestFriends>,
}
type InitialState = typeof initialState


const sideBarReducer = (state = initialState, action: ActionsTypes): InitialState => {
    return state
}
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkActionsType = BaseThunkType<ActionsTypes>

const actions = {
volume : () => ({type  : "Lol"})
}


export default sideBarReducer