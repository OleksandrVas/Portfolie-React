import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfilePage from "./ProfilePage";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {PostDataType, ProfileType} from "../../types/types";


type PropsType = {
    profile : ProfileType | null ,
    status : string | null,
    updateStatus :  (status: string) => void,
    savePhoto : (file : HTMLImageElement) => void,
    isOwner : boolean,
    saveProfile : (profile : ProfileType) => void ,
    postData : Array<PostDataType>
}

const Profile : React.FC<PropsType> = ({profile,status,updateStatus ,savePhoto, isOwner , saveProfile , postData}) => {
    return (
        <>
            <div>
                <ProfilePage isOwner={isOwner} savePhoto={savePhoto} profile={profile} status={status} saveProfile={saveProfile}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <MyPostContainer postData={postData} />
            </div>
        </>
    );

};

export default Profile