const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS"

let initialState = {
    users: [
        {
            id: 1,
            fullName: "Sasha",
            photoUrl : 'https://school.birdinflight.com/wp-content/uploads/2017/12/%D0%A1%D0%B0%D1%88%D0%B0-%D0%9C%D0%B0%D1%81%D0%BB%D0%BE%D0%B2.jpg',
            followed: false,
            status: "I'm a doctor",
            location: {city: "Poltava", country: "Urkaine"}
        },
        {
            id: 2,
            fullName: "Vlad",
            followed: true,
            photoUrl : 'https://school.birdinflight.com/wp-content/uploads/2017/12/%D0%A1%D0%B0%D1%88%D0%B0-%D0%9C%D0%B0%D1%81%D0%BB%D0%BE%D0%B2.jpg',
            status: "I like football ",
            location: {city: "Kharkov", country: "Urkaine"}
        },
        {
            id: 3,
            fullName: "Misha",
            followed: false,
            photoUrl : 'https://school.birdinflight.com/wp-content/uploads/2017/12/%D0%A1%D0%B0%D1%88%D0%B0-%D0%9C%D0%B0%D1%81%D0%BB%D0%BE%D0%B2.jpg',
            status: "my love is food ",
            location: {city: "Kiev", country: "Urkaine"}
        }
    ],
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                // users: [...state.users], Идентично  с ниже указанным
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }
        case UNFOLLOW :
            return {
                ...state,
                // users: [...state.users], Идентично  с ниже указанным
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }

        case SET_USERS :
            return  {
                ...state , users : [...state.users , ...action.users ]
            }
        default :
            return state


    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users });


export default userReducer