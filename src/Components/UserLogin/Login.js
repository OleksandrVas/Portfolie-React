import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";


const maxLength10 = maxLengthCreator(10)
const maxLength8 = maxLengthCreator(8)


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required,maxLength10 ]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required,maxLength8 ]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}   /> remember me
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