import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "../Common/FormsControl/FormControl.module.css"


const maxLength30 = maxLengthCreator(30)
const maxLength15 = maxLengthCreator(15)


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
                       validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>

            {props.error &&
            <div className={classes.formSummaryError}>
                    {props.error}
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


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    //редирект на /profile
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <>
            <h1>Login</h1>
            <ContactForm onSubmit={onSubmit}/>
        </>
    )
}
let mapStateToTheProps = (props) => ({
    isAuth: props.auth.isAuth
})
export default connect(mapStateToTheProps, {login})(Login)