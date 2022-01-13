import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    postData: [
        {message: "How are you ", id: 1, likesCount: 22},
        {message: "it's my first post ", id: 2, likesCount: 200},
        {message: "it's my second post  ", id: 3, likesCount: 183},
    ]
}
it('length shoult be incremented   ', () => {

    //1 test data
    let action = addPost("it-cam")

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.postData[3].message).toBe("it-cam")
});

it('after deleting length should be decrement if id inncorect  ', () => {

    //1 test data
    let action = deletePost(1000)

    // 2 action
    let newState = profileReducer(state, action)
    // 3 expectation
    expect(newState.postData.length).toBe(3)
});


