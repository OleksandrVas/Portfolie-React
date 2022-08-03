import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";


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
        },
        friendsMessages: {
            messages: [
                {
                    id: 1,
                    name: "Sasha",
                    text: "Hi"
                },
            ],
            newFriendsMessageText: ''
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
    // addPost() {
    //Это нахлджится уже в reducer
    //     let newPost = {
    //         message: this._state.profilePage.newPostText,
    //         id: 4,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.postData.push(newPost);
    //     this._callSubscriber(this._state)
    //     this.addPostText('')
    //
    // },
    // addPostText(newText) {
    //
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state)
    // },
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.friendsMessages = friendsReducer(this._state.friendsMessages, action)

        this._callSubscriber(this._state)

    }
}


window.store = store
export default store