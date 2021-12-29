import React from "react";
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {

    return (
        <>
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field component="textarea" name="postYourMessage" placeholder="Add your Post"/>
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

