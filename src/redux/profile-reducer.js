
const ADD_POST = 'ADD-POST';
const ADD_POST_TEXT = 'ADD-POST-TEXT';

 const profileReducer = (state , action) => {

     switch (action.type ) {
         case ADD_POST :
             let newPost = {
                 message: state.newPostText,
                 id: 4,
                 likesCount: 0
             };
             state.postData.push(newPost);
             state.newPostText = '';
             return state;
         case ADD_POST_TEXT :
             state.newPostText = action.newText;
             return state
         default :
             return state
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