import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validator";
import {createField, GetExtractedFormValueKeysType, TextArea} from "../../Common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {actions} from "../../../redux/profile-reducer";

const maxLength = maxLengthCreator(10)

const PostForm: React.FC<InjectedFormProps<LoginFormValueType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    {createField<GetExtractedFormValueKeysType<LoginFormValueType>>("Add your Post", "postYourMessage", [required], TextArea, maxLength)}

                </div>
                <div>
                    <button>
                        Add post
                    </button>
                </div>
            </form>
        </>
    )
}


const PostFormRedux = reduxForm<LoginFormValueType, LoginFormOwnProps>({
    form: "postForm",
})(PostForm)


const PostFormSubmit: React.FC<PropsType> = ({addPost}) => {

    const onPostAdd = (values :LoginFormValueType  ) => {
      addPost(values.postYourMessage)
    }

    return (
        <>
            <PostFormRedux onSubmit={onPostAdd}/>
        </>
    )
}

const mapStateToProps = (state: AppStateType) => ({})

export default connect<{} ,MapDispatchToPropsType , LoginFormOwnProps , AppStateType >(mapStateToProps , {addPost : actions.addPost} )(PostFormSubmit)


type LoginFormValueType = {
    postYourMessage: string
}

//type LoginFormValueKeysType = Extract<keyof LoginFormValueType, string>  =>  GetExtractedFormValueKeysType <LoginFormValueType>



type MapDispatchToPropsType = {
    addPost : (postYourMessage : string) => void
}
type LoginFormOwnProps = {}

type PropsType = LoginFormOwnProps &  MapDispatchToPropsType

