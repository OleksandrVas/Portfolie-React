import React from "react";
import {Form, Formik, Field} from 'formik';
import {FilterType} from "../../../redux/users-reducer";

const userFormValidate = () => {
    const errors = {};
    return errors;
}

type UserSearchFormObjectType = {
    onFilterChanged: (filter: FilterType) => void
}
type UserSearchFormSubmitType = {
    (value: FormType): void,
    // isSubmitting : (isSubmitting: boolean) => void
}
type FormType = {
    term: string,
    friend: "true" | "false" | "null"
}

export const UserSearchForm: React.FC<UserSearchFormObjectType> = React.memo(({onFilterChanged}) => {
    //has submitting func , but dont wrote

    const submit: UserSearchFormSubmitType = (values: FormType) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        onFilterChanged(filter);
    }
    return (
        <Formik
            initialValues={{term: '', friend: "null"}}
            validate={userFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field as="select" name="friend">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>

                    </Field>

                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    )
})


type PropsTypeForm = {}