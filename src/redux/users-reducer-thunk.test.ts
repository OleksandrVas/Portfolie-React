import {actions, followUser, unFollowUser} from "./users-reducer";
import {FollowUnfollowResponseDataType, usersApi} from "../api/usersApi";
import {ResultCodesEnum} from "../api/api";

jest.mock("../api/usersApi")
const userApiMock = usersApi as jest.Mocked<typeof usersApi>

const result = {
    resultCode: ResultCodesEnum,
    data: {},
    message: []
}

userApiMock.follow.mockReturnValue(Promise.resolve(result))
userApiMock.unfollow.mockReturnValue(Promise.resolve(result))


test("success follow think ", async () => {

    const thunk = followUser(1)

    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()


    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unFollow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
})


test("success unFollow thunk ", async () => {


    const thunk = unFollowUser(1);
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.follow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))

})