import React from "react";
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
    console.log("rerender")
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component="input" />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component= "input" />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component= "input"  /> remember me
            </div>
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
const onSubmit = (formData)=>{
    console.log(formData)
}
    return (
        <>
            <h1>Login</h1>
            <ContactForm onSubmit={onSubmit} />
        </>
    )
}

export default Login