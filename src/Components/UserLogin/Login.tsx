import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {createField, Input} from "../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "../Common/FormsControl/FormControl.module.css"
import {AppStateType} from "../../redux/redux-store";


const maxLength30 = maxLengthCreator(30)
const maxLength15 = maxLengthCreator(15)


type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> =
    ({handleSubmit, error, captchaUrl}) => {

        return (
            <form onSubmit={handleSubmit}>
                {createField<LoginFromValuesKeysType>("Email", "email", [required], Input)}
                {createField<LoginFromValuesKeysType>("Password", "password", [required], Input, {type: "password"})}
                {createField<LoginFromValuesKeysType>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me ")}
                {captchaUrl &&
                <div>
                    <img src={captchaUrl}/>
                </div>
                }
                {captchaUrl &&
                createField<LoginFromValuesKeysType>("Captcha", "captcha", [required], Input,)
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

const ContactForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({
    form: 'login'
})(LoginForm)


type MapStatePropsType = {
    captchaUrl: string | null,
    isAuth: boolean
}
type MapDispatchProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

type LoginFromValuesKeysType  = Extract<keyof LoginFormValuesType , string>



const Login: React.FC<MapStatePropsType & MapDispatchProps> = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData: LoginFormValuesType) => {
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
let mapStateToTheProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect<MapStatePropsType, MapDispatchProps, LoginFormOwnPropsType, AppStateType>(mapStateToTheProps, {login})(Login)