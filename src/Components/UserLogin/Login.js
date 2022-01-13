import React from "react";
import {Field, reduxForm} from 'redux-form'
import {createField, Input} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "../Common/FormsControl/FormControl.module.css"


const maxLength30 = maxLengthCreator(30)
const maxLength15 = maxLengthCreator(15)


const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, required,maxLength30   )}
            {createField("Password", "password", Input, required, maxLength15 ,"password")}
            {/*{createField(null, "rememberMe", Input, [],null ,"checkbox" , "remember me")}*/}
            {error &&
            <div className={classes.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ContactForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }
    //редирект на /profile
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <>
            <h1>Login</h1>
            <ContactForm onSubmit={onSubmit}/>
        </>
    )
}
let mapStateToTheProps = ({auth}) => ({
    isAuth: auth.isAuth
})
export default connect(mapStateToTheProps, {login})(Login)