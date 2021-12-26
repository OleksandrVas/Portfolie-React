import {profileApi} from "../api/api";


const ADD_POST = 'ADD-POST';
const ADD_POST_TEXT = 'ADD-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    nameOfUser: [
        {
            id: 0,
            name: "Oleksandr",
            birthday: "I was born in 12 October",
            position: "Urk poltava",
            job: "I'm Web Developer"
        }
    ],
    postData: [
        {message: "How are you ", id: 1, likesCount: 22},
        {message: "it's my first post ", id: 2, likesCount: 200},
        {message: "it's my second post  ", id: 3, likesCount: 183},
    ],
    newPostText: '',
    profile: null,
    status: ""

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                message: state.newPostText,
                id: 4,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, newPost]
            }
        }
        case ADD_POST_TEXT : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }

        default : {
            return state
        }
    }

    return state;
}

export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updateNewPost = (text) => {
    return {
        type: ADD_POST_TEXT,
        newText: text
    }
}


// export const getUsers = (userId) =>{
//      return (dispatch) => {
//          usersApi.getUserPage(userId)
//              .then( response => {
//                  dispatch(setUserProfile(response.data))
//              })
//      }
// }


export const getUsers = (userId) =>
    (dispatch) => {
        profileApi.getUserPage(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
export const getStatus = (userId) =>
    (dispatch) => {
        profileApi.getUserStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })


    }
export const updateStatus = (status) =>
    (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }

            })
    }


export default profileReducer;