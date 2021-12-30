import React from "react";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validator";
import {TextArea} from "../../Common/FormsControl/FormsControl";

const maxLength = maxLengthCreator(10)

const PostForm = (props) => {

    return (
        <>
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field component={TextArea} name="postYourMessage" placeholder="Add your Post" validate={[required , maxLength ]}/>
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


const PostFormRedux = reduxForm({
    form : "postForm"
})(PostForm)


const PostFormSubmit = (props) => {

    const onPostAdd = (values) =>{
        props.addPost(values.postYourMessage)
    }

    return (
        <>
            <PostFormRedux onSubmit={onPostAdd}/>
        </>
    )
}


export default PostFormSubmit

