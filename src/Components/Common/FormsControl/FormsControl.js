import React from "react";
import classes from "./FormControl.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <div className={hasError && classes.formControl} >
                <div >
                    {props.children}
                </div>

                { hasError &&  <span>{meta.error} </span> }
            </div>
        </>
    )
}
 export const TextArea = (props) => {
    const {input, meta,child, ...restProps} = props
   return <FormControl {...props} ><textarea {...props.input}{...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta,child,  ...restProps} = props
    return <FormControl {...props } > <input {...input}{...restProps} /></FormControl>
}

export const createField = (placeholder,name,component,validate,maxLength , type , text=''  ) =>(
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={[validate, maxLength]} type={type} /> {text}
    </div>

)