import React from "react"
import {InjectedFormProps, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validator";
import {createField, GetExtractedFormValueKeysType, Input, TextArea} from "../../Common/FormsControl/FormsControl";

const maxLength15 = maxLengthCreator(15)


const Form: React.FC<InjectedFormProps<NewMessageDialogsFormValuesType, PropsType> & PropsType> = ({
                                                                                                       handleSubmit,
                                                                                                       addMessage
                                                                                                   }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                {createField<GetExtractedFormValueKeysType<NewMessageDialogsFormValuesType>>("What u say ? ", "dialogForm", [required, maxLength15], TextArea)}
                <div>
                    <button>add message</button>
                </div>
            </form>
        </>
    )
}

const DialogsFormRedux = reduxForm<NewMessageDialogsFormValuesType, PropsType>({
    form: "dialogsForm"
})(Form)


const DialogsForm: React.FC<PropsType> = ({addMessage}) => {
    const onAddMassage = (value: NewMessageDialogsFormValuesType) => {
        addMessage(value.dialogForm)
    }
    return (
        <>
            <DialogsFormRedux onSubmit={onAddMassage} handleSubmit={undefined}
                              addMessage={function (dialogForm: string): void {
                                  throw new Error("Function not implemented.");
                              }}/>
        </>
    )

}


export default DialogsForm


type PropsType = {
    handleSubmit: any,
    addMessage: (dialogForm: string) => void
}

export type NewMessageDialogsFormValuesType = {
    dialogForm: string,

}



