import React from "react";


class ProfileStatus extends React.Component {
    //localState
    state = {
        editMode: false,
        status:this.props.status

}

    //localState


    activateEditMode = () => {

        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status : e.currentTarget.value
        })
        console.log(e.currentTarget.value)
    }

   componentDidUpdate(prevProps, prevStatus,snapshot){
        if(prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
   }


    render() {

        return (

            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "Hello"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                </div>
                }

            </>
        )

    }
}

export default ProfileStatus