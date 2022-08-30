import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Input } from "../Common/FormsControl/FormsControl";
import { required } from "../../utils/validators/validator";
import { useSelector } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../Common/FormsControl/FormControl.module.css";
import { getCaptchaUrl, getIsAuth } from "../../redux/users-selectors";

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> &
    LoginFormOwnPropsType
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFromValuesKeysType>(
        "Email",
        "email",
        [required],
        Input
      )}
      {createField<LoginFromValuesKeysType>(
        "Password",
        "password",
        [required],
        Input,
        { type: "password" }
      )}
      {createField<LoginFromValuesKeysType>(
        undefined,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me "
      )}
      {captchaUrl && (
        <div>
          <img src={captchaUrl} />
        </div>
      )}
      {captchaUrl &&
        createField<LoginFromValuesKeysType>(
          "Captcha",
          "captcha",
          [required],
          Input
        )}
      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const ContactForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({
  form: "login",
})(LoginForm);

export const LoginPage: React.FC<LoginPropsType> = () => {
  const isAuth = useSelector(getIsAuth);
  const captchaUrl = useSelector(getCaptchaUrl);

  const onSubmit = (formData: LoginFormValuesType) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <>
      <h1>Login</h1>
      <ContactForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </>
  );
};

type LoginPropsType = {};
export type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type LoginFormOwnPropsType = {
  captchaUrl: string | null;
};
export type LoginFromValuesKeysType = Extract<
  keyof LoginFormValuesType,
  string
>;
