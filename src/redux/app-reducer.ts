import {setUsers} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";




type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: true
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS": {
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

type ActionsTypes = InferActionsTypes<typeof  actions>

export  const  actions ={
     setInitializedSuccess : () => ({type: "INITIALIZED_SUCCESS"} as const )
}




export const initializeApp = () : ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes > => async (dispatch) => {
    let promise = dispatch(setUsers())


    Promise.all([promise])
        .then(() => {
            dispatch(actions.setInitializedSuccess())
        })

}


export default appReducer





