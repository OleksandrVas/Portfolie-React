import React, { useState } from "react";
import Preloader from "../Common/Preloader/Preloader";
import classes from "./Profile.module.css";
import ProfileData from "./ProfileData";
import ProfilePhotoData from "./ProfilePhotoData";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import { ProfileType } from "../../types/types";
import { useDispatch } from "react-redux";

type PropsType = {
  profile: ProfileType | null;
  status: string | null;
  isOwner: boolean;
  // (file: HTMLImageElement) => void
};

const ProfilePage: React.FC<PropsType> = ({ profile, status, isOwner }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const saveProfile = (formData: ProfileType) => {
    dispatch(saveProfile(formData));
  };

  const goToEditMode = () => {
    setEditMode(true);
  };

  if (!profile) {
    return (
      <>
        <div>
          <Preloader />
        </div>
      </>
    );
  }
  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData);
    setEditMode(false);
  };

  return (
    <>
      <div className={classes.contentLogo}>
        <ProfilePhotoData
          profilePhotoSize={profile.photos.large}
          isOwner={isOwner}
        />

        {editMode ? (
          <ProfileDataFormReduxForm
            // @ts-ignore
            onSubmit={onSubmit}
            status={status}
            profile={profile}
          />
        ) : (
          <ProfileData
            profile={profile}
            status={status}
            isOwner={isOwner}
            gotToEditMode={goToEditMode}
          />
        )}

        {/*<ProfileData profile={profile} status={status}/>*/}
      </div>
    </>
  );
};

export default ProfilePage;
