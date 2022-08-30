import { ResultCodesEnum } from "../api/api";
import {
  NameOfUserType,
  PhotoType,
  PostDataType,
  ProfileType,
} from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { profileApi } from "../api/profileApi";

let initialState = {
  nameOfUser: {
    id: 0,
    name: "Oleksandr",
    birthday: "I was born in 12 October",
    position: "Urk poltava",
    job: "I'm Web Developer",
  } as NameOfUserType,
  postData: [
    { message: "How are you ", id: 1, likesCount: 22 },
    { message: "it's my first post ", id: 2, likesCount: 200 },
    { message: "it's my second post  ", id: 3, likesCount: 183 },
  ] as Array<PostDataType>,

  profile: null as ProfileType | null,
  status: "" as string | null,
};
export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "IC/PROFILE/ADD_POST": {
      let newPost = {
        message: action.postYourMessage,
        id: 4,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
      };
    }
    case "IC/PROFILE/SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "IC/PROFILE/SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "IC/PROFILE/DELETE_POST": {
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };
    }
    case "IC/PROFILE/SAVE_PHOTO_SUCCESS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }

    default: {
      return state;
    }
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
  addPost: (postYourMessage: any) =>
    ({ type: "IC/PROFILE/ADD_POST", postYourMessage } as const),
  setUserProfile: (profile: ProfileType) =>
    ({ type: "IC/PROFILE/SET_USER_PROFILE", profile } as const),
  setStatus: (status: string) =>
    ({ type: "IC/PROFILE/SET_STATUS", status } as const),
  deletePost: (postId: number) =>
    ({ type: "IC/PROFILE/DELETE_POST", postId } as const),
  savePhotoSuccess: (photos: PhotoType) =>
    ({ type: "IC/PROFILE/SAVE_PHOTO_SUCCESS", photos } as const),
};

type ThunkActionsTypes = BaseThunkType<ActionsTypes>;

export const getUsers =
  (userId: number | null): ThunkActionsTypes =>
  async (dispatch) => {
    // вернет промис
    if (userId !== null) {
      const getUserPageData = await profileApi.getUserPage(userId); // а дальше будет ждать пока выполниться //
      dispatch(actions.setUserProfile(getUserPageData));
    }
  };
export const getStatus =
  (userId: number | null): ThunkActionsTypes =>
  async (dispatch) => {
    if (userId !== null) {
      const getUserData = await profileApi.getUserStatus(userId);
      dispatch(actions.setStatus(getUserData));
    } else {
      const getUserData = await profileApi.getUserStatus(1);
      dispatch(actions.setStatus(getUserData));
    }
  };
export const updateStatus =
  (status: string | null): ThunkActionsTypes =>
  async (dispatch) => {
    try {
      if (status !== null) {
        const updateUserData = await profileApi.updateStatus(status);
        if (updateUserData.resultCode === ResultCodesEnum.Success) {
          dispatch(actions.setStatus(status));
        }
      }
    } catch (error) {
      //
    }
  };
export const savePhoto =
  (file: File): ThunkActionsTypes =>
  async (dispatch) => {
    const savePhotoData = await profileApi.savePhoto(file);

    if (savePhotoData.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.savePhotoSuccess(savePhotoData.data));
    }
  };

export const saveProfile =
  (profile: ProfileType): ThunkActionsTypes =>
  async (dispatch, getState) => {
    const userIdData = getState().auth.userId;
    const saveProfileData = await profileApi.saveMyProfile(profile);
    if (saveProfileData.resultCode === 0) {
      if (userIdData !== null) {
        dispatch(getStatus(userIdData));
      } else {
        throw new Error("userId can't be null");
      }
    }
  };

export default profileReducer;
