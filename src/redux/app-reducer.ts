import {setUsers} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";


let initialState = {
    initialized: true
}
export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "IC/APP/INITIALIZED_SUCCESS" : {
            return {
                ...state,
                initialized: false,
            }
        }
        default : {
            return state
        }
    }
}


export const actions = {
    setInitializedSuccess: () => ({type: "IC/APP/INITIALIZED_SUCCESS"} as const)
}

type ThunkActionsType = BaseThunkType<ActionsTypes>


export const initializeApp = (): ThunkActionsType => async (dispatch) => {
    let promise = dispatch(setUsers())


    Promise.all([promise])
        .then(() => {
            dispatch(actions.setInitializedSuccess())
        })

}


export default appReducer





