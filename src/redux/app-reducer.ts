import {setUsers} from "./auth-reducer";


let INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"


type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: true
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type SetInitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const setInitializedSuccess = (): SetInitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(setUsers())


    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess())
        })

}


export default appReducer





