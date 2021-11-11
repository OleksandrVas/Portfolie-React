const ADD_POST = 'ADD-POST';
const ADD_POST_TEXT = 'ADD-POST-TEXT';

let store = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
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
            ],
            massages: [
                {id: 1, massage: "demon hello"},
                {id: 2, massage: "Vlad kak ti"},
                {id: 3, massage: "Sasha i miss you too"},
            ],
            newMessageText: ""
        },
        sideBar: {
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

            ],
        }
    },
    _callSubscriber() {
        console.log("stay changed ")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    addPost() {

        let newPost = {
            message: this._state.profilePage.newPostText,
            id: 4,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._callSubscriber(this._state)
        this.addPostText('')

    },
    addPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    addMessage() {
        let addMessages = {
            id: 4,
            massage: this._state.dialogPage.newMessageText
        }
        this._state.dialogPage.massages.push(addMessages)
        this._callSubscriber(this._state)
        this.addMessageText('')

    },
    addMessageText(text) {
        this._state.dialogPage.newMessageText = text;
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newPostText,
                id: 4,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._callSubscriber(this._state)
            this.addPostText('')
        } else if (action.type === ADD_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }else if (action.type === 'ADD-MESSAGE') {
            let addMessages = {
                id: 4,
                massage: this._state.dialogPage.newMessageText
            }
            this._state.dialogPage.massages.push(addMessages)
            this._callSubscriber(this._state)
            this.addMessageText('')
        }else if (action.type === 'ADD-MESSAGE-TEXT') {
            this._state.dialogPage.newMessageText = action.text;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type : ADD_POST})
export const updateNewPostCreator = (text) => {
    return {
        type : 'ADD-POST-TEXT',
        newText : text
    }
}

window.store = store
export default store