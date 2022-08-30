import React from "react";
import classes from "./Profile.module.css";
import {createField, GetExtractedFormValueKeysType, Input, TextArea} from "../Common/FormsControl/FormsControl";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validator";


const maxLength20 = maxLengthCreator(20)




const ProfileDataForm : React.FC<InjectedFormProps<ProfileDataFormValueType,OwnProps> & OwnProps> = ({handleSubmit, profile}) => {
    return (
        <form className={classes.contentLogoAboutContainer} onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            <div><b>My full name</b> :
                {createField<GetExtractedFormValueKeysType<ProfileDataFormValueType>>("Full name", "fullName", [], Input,  )} </div>
            <div><b>Hi , i'm looking for a job </b> :
                {createField<GetExtractedFormValueKeysType<ProfileDataFormValueType>>("Lookig for a job ", "lookingForAJob", [], Input, {type : "checkbox"} )}
            </div>
            <div><b>About me </b>:
                {createField<GetExtractedFormValueKeysType<ProfileDataFormValueType>>("About me ", "aboutMe",  [],TextArea, )}
            </div>
            <div>
                <div><b>My professional skills </b>
                    : {createField<GetExtractedFormValueKeysType<ProfileDataFormValueType>>("My professional skills  ", "mySkills",  [], TextArea, maxLength20)} </div>
            </div>
            <div>
                <b> Contacts : {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={classes.contacts}>
                        <b>{key} :{createField<GetExtractedFormValueKeysType<ProfileDataFormValueType>>("", "contacts", [],Input , maxLength20)} </b>
                    </div>
                })}</b>
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm<ProfileDataFormValueType , OwnProps>({
    form: "edit-profile"
})(ProfileDataForm)


export default ProfileDataFormReduxForm


type ProfileDataFormValueType = {
    fullName : string ,
    contacts : string,
    lookingForAJob : string ,
    mySkills : string ,
    aboutMe : string,
}

type OwnProps = {
    profile : any
}
