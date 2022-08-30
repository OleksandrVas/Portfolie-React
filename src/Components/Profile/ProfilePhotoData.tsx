import React, { ChangeEvent } from "react";
import classes from "./Profile.module.css";
import defaultImg from "../../assets/img/defaultUserImg.png";
import { useDispatch } from "react-redux";

const ProfilePhotoData: React.FC<PropsType> = ({
  profilePhotoSize,
  isOwner,
}) => {
  const src = profilePhotoSize;

  const dispatch = useDispatch();
  const savePhoto = (file: File) => {
    dispatch(savePhoto(file));
  };
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={classes.mainPhotoUserContainer}>
      <img src={src || defaultImg} className={classes.mainPhotoUser} />
      {isOwner && (
        <input
          type={"file"}
          className={classes.mainPhotoUploader}
          onChange={onMainPhotoSelected}
        />
      )}
    </div>
  );
};

export default ProfilePhotoData;

type PropsType = {
  profilePhotoSize: string;
  isOwner: boolean;
};
