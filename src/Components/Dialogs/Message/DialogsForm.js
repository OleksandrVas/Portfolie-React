import React from "react"
import {Field, reduxForm} from "redux-form";

const Form = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Field name="dialogForm" component="textarea" placeholder="What u say ? " />
                <div>
                    <button >add message</button>
                </div>
            </form>
        </>
    )
}

const DialogsFormRedux = reduxForm({
    form : "dialogsForm"
})(Form)


const DialogsForm = (props) => {
    const onAddMassage = (values) => {
        props.addMessage(values.dialogForm)
    }
    return (
        <>
            <DialogsFormRedux  onSubmit={onAddMassage}/>
        </>
    )
}

export default DialogsForm




