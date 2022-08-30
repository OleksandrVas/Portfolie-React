import React, { useEffect } from "react";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { getStatus, getUsers } from "../../redux/profile-reducer";
import {
  getAuthorisedUserId,
  getPostData,
  getProfile,
  getUserStatus,
} from "../../redux/users-selectors";
import { useHistory, useRouteMatch } from "react-router-dom";

export const ProfileContainer = () => {
  const profile = useSelector(getProfile);
  const status = useSelector(getUserStatus);
  const postData = useSelector(getPostData);
  const authorisedUserId = useSelector(getAuthorisedUserId);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();

  const refreshProfile = () => {
    let userId = match.isExact; // is it true ? why isExact ?

    if (!userId) {
      const userId: number | null = authorisedUserId;
      dispatch(getUsers(userId));
      dispatch(getStatus(userId));
      if (!userId) {
        // @ts-ignore
        history.push("/login");
      }
    }
  };
  useEffect(() => {
    dispatch(refreshProfile());
  }, []);

  return (
    <>
      <Profile
        profile={profile}
        status={status}
        isOwner={!match.isExact}
        postData={postData}
      />
    </>
  );
};
