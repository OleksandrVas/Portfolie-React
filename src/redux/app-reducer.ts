import {setUsers} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


let INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"


type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: true
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
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

type ActionsTypes = SetInitializedSuccessActionType

type SetInitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}




export const setInitializedSuccess = (): SetInitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () : ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes > => async (dispatch) => {
    let promise = dispatch(setUsers())


    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess())
        })

}


export default appReducer





