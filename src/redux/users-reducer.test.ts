import {UserType} from "../types/types";
import usersReducer, {InitialState} from "./users-reducer";
import {actions} from "./users-reducer";


let state: InitialState ;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: "Vlad",
                status: " Hello",
                photos: {small: null, large: null},
                followed: false
            },
            {
                id: 1,
                name: "Poch",
                status: " bye",
                photos: {small: null, large: null},
                followed: false
            },
            {
                id: 2,
                name: "Sasha",
                status: " Vin",
                photos: {small: null, large: null},
                followed: true
            },
            {
                id: 3,
                name: "Dima",
                status: " aaaa",
                photos: {small: null, large: null},
                followed: true
            }
        ],
        pageSize: 5,
        totalUsersCount: 100,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []  //array of users id
    }
})


test("follow Success", () => {

    const newState = usersReducer(state, actions.follow(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test("unFollow success" , () => {

    const newState = usersReducer(state , actions.unFollow(2))

    expect(newState.users[2].followed).toBeFalsy()
    expect(newState.users[3].followed).toBeTruthy()

})