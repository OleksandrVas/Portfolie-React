import React from "react"
import {Field, reduxForm} from "redux-form";
import {required,maxLengthCreator} from "../../../utils/validators/validator";
import {TextArea} from "../../Common/FormsControl/FormsControl";

const maxLength15 = maxLengthCreator(15)

const Form = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} >
                <Field name="dialogForm" component={TextArea} placeholder="What u say ? " validate={[required,maxLength15]} />
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




