import React from "react";
import classes from "./Profile.module.css";
import {createField, Input, TextArea} from "../Common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validator";


const maxLength20 = maxLengthCreator(20)

const ProfileDataForm = ({handleSubmit, profile}) => {
    return (
        <form className={classes.contentLogoAboutContainer} onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            <div><b>My full name</b> :
                {createField("Full name", "fullname", [], Input,  )} </div>
            <div><b>Hi , i'm looking for a job </b> :
                {createField("Lookig for a job ", "lookingforajob", [], Input, {type : "checkbox"} )}
            </div>
            <div><b>About me </b>:
                {createField("About me ", "aboutme",  [],TextArea, )}
            </div>
            <div>
                <div><b>My professional skills </b>
                    : {createField("My professional skills  ", "myskills",  [], TextArea, maxLength20)} </div>
            </div>
            <div>
                <b> Contacts : {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={classes.contacts}>
                        <b>{key} :{createField(key, "contacts." + key, [],Input , maxLength20)} </b>
                    </div>
                })}</b>
            </div>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({
    form: "edit-profile"
})(ProfileDataForm)


export default ProfileDataFormReduxForm