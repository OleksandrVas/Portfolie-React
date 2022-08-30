import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { PostDataType, ProfileType } from "../../types/types";

type PropsType = {
  profile: ProfileType | null;
  status: string | null;
  isOwner: boolean;
  postData: Array<PostDataType>;
};

const Profile: React.FC<PropsType> = ({
  profile,
  status,
  isOwner,
  postData,
}) => {
  return (
    <>
      <div>
        <ProfilePage isOwner={isOwner} profile={profile} status={status} />
        <ProfileStatusWithHooks status={status} />
        <MyPostContainer postData={postData} />
      </div>
    </>
  );
};

export default Profile;
