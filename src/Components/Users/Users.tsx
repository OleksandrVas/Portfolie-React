import React, { useEffect } from "react";
import Paginator from "../Common/Paginator/Paginator";
import classes from "./users.module.css";
import User from "./User";
import { UserSearchForm } from "./UserSearchForm/UsersSearchForm";
import { FilterType, requestUsers } from "../../redux/users-reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getFilter,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";

type PropsType = {};

const Users: React.FC<PropsType> = ({ ...props }) => {
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getFilter);
  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useDispatch();

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged: (filter: FilterType) => void = (filter) => {
    dispatch(requestUsers(1, pageSize, filter));
  };
  const followUser = (userId: number) => {
    dispatch(followUser(userId));
  };
  const unFollowUser = (userId: number) => {
    dispatch(unFollowUser(userId));
  };

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, { friend: null, term: "" }));
  }, []);

  return (
    <div className={classes.positionUsersDisplay}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <UserSearchForm onFilterChanged={onFilterChanged} />
      <div>
        {users.map((users) => (
          <User
            key={users.id}
            users={users}
            followingInProgress={followingInProgress}
            followUser={followUser}
            unFollowUser={unFollowUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
