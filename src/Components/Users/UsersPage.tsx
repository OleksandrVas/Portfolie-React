import React from "react";
import Users from "./Users";
import { useSelector } from "react-redux";
import Preloader from "../Common/Preloader/Preloader";
import { getIsFetching } from "../../redux/users-selectors";

export const UsersPage: React.FC<UsersPagePropsType> = () => {
  const isFetching = useSelector(getIsFetching);
  return (
    <>
      <div>Samurai</div>
      {isFetching ? <Preloader /> : null}
      <Users />
    </>
  );
};
type UsersPagePropsType = {};
// IntrinsicAttributes
// Как работает compose :мы передаем клас. комп. вторым вызовом ,
// далее идет цепочка снизу вверх -> WithAuthRedirect(UsersContainer) ->
//connect(mapStateToProps, {setCurrentPage,toggleFollowingInProgress,getUsers, followUser,unFollowUser,})(WithAuthRedirect(UsersContainer))
// то есть идет послеовательность действий
