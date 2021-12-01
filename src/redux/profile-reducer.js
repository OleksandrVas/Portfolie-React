const ADD_POST = 'ADD-POST';
const ADD_POST_TEXT = 'ADD-POST-TEXT';

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
    newPostText: ''

} ;

 const profileReducer = (state = initialState , action) => {
     switch (action.type ) {
         case ADD_POST : {
             let newPost = {
                 message: state.newPostText,
                 id: 4,
                 likesCount: 0
             };
             return {
                     ...state ,
                     newPostText : '',
                     postData : [...state.postData,newPost]
             }
         }
         case ADD_POST_TEXT : {
             return {
                 ...state,
                 newPostText : action.newText
             }
         }
         default : {
             return state
         }
     }

    return state ;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (text) => {
    return {
        type: ADD_POST_TEXT,
        newText: text
    }
}

export default profileReducer;