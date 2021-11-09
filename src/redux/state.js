let rerenderEntireTree = () => {
    console.log("stay changed ")
}

let state = {
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
}
window.state = state

export let addPost = () => {

    let newPost = {
        message: state.profilePage.newPostText,
        id: 4,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree()
    addPostText('')

}
export let addPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree()
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer
}



export let addMessage = () => {
    let addMessages = {
        id:4,
        massage: state.dialogPage.newMessageText
    }
    state.dialogPage.massages.push(addMessages)
    rerenderEntireTree()
    addMessageText('')

}
export let addMessageText = (text) => {
    state.dialogPage.newMessageText = text;
    rerenderEntireTree()
}









export default state