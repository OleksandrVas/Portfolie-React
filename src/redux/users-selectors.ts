import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const getUsers = (state: AppStateType) => {
  return state.usersPage.users;
};
export const getFilter = (state: AppStateType) => {
  return state.usersPage.filter;
};
export const getUsersSuperSelector = createSelector(getUsers, (users) => {
  return users.filter((u) => true);
});

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};
export const getProfile = (state: AppStateType) => {
  return state.profilePage.profile;
};
export const getUserStatus = (state: AppStateType) => {
  return state.profilePage.status;
};

export const getPostData = (state: AppStateType) => {
  return state.profilePage.postData;
};

export const getCaptchaUrl = (state: AppStateType) => {
  return state.auth.captchaUrl;
};
export const getAuthorisedUserId = (state: AppStateType) => {
  return state.auth.userId;
};
export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
