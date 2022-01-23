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


const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", required, Input)}
            {createField("Password", "password", required, Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me ")}
            {captchaUrl &&
            <div>
                <img src={captchaUrl}/>
            </div>
            }
            {captchaUrl &&
            createField("Captcha", "captcha", required, Input,)
            }
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


const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    //редирект на /profile
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <>
            <h1>Login</h1>
            <ContactForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </>
    )
}
let mapStateToTheProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToTheProps, {login})(Login)