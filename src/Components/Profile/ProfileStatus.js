import React from "react";


class ProfileStatus extends React.Component {
    //localState
    state = {
        editMode: false
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
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }

            </>
        )

    }
}

export default ProfileStatus