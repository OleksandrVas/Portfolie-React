import React, {Component, ComponentType, InputHTMLAttributes} from "react";
import classes from "./FormControl.module.css";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utils/validators/validator";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps,
    children: React.ReactNode
}


const FormControl: React.FC<FormControlPropsType> = ({meta, children}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <div className={hasError && classes.formControl}>
                <div>
                    {children}
                </div>

                {hasError && <span>{meta.error} </span>}
            </div>
        </>
    )
}


export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} ><textarea {...props.input}{...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} > <input {...input}{...restProps} /></FormControl>
}



export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            name: FormKeysType,
                            validate: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,// ComponentType<WrappedFieldProps> | "input" | "select" | "textarea" | undefined,
                            props = {},
                            text = "") {
    return <div>
        <Field placeholder={placeholder} name={name} validate={validate} component={component} {...props} /> {text}
    </div>
}

export type GetExtractedFormValueKeysType<T> = Extract<keyof T , string>