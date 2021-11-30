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
    newPostText: ""

} ;

 const profileReducer = (state = initialState , action) => {
     switch (action.type ) {
         case ADD_POST : {
             let newPost = {
                 message: state.newPostText,
                 id: 4,
                 likesCount: 0
             };
             let stateCopy = {...state};
             stateCopy.postData = [...state.postData]
             stateCopy.postData.push(newPost);
             stateCopy.newPostText = '';
             return stateCopy;
         }
         case ADD_POST_TEXT : {
             let stateCopy = {...state};
             stateCopy.newPostText = [...state.newPostText]
             stateCopy.newPostText = action.newText;
             return stateCopy
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