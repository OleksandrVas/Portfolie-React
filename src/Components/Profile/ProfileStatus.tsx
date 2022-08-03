import React, {ChangeEvent} from "react";


type PropsType = {
    status : string,
    updateStatus  : (status : string) => void
}

type StateType = {
    editMode : boolean ,
    status : string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
    //localState
    state = {
        editMode: false,
        status: this.props.status

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
    onStatusChange = (e : ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
        console.log(e.currentTarget.value)
    }

    componentDidUpdate(prevProps : PropsType , prevStatus : StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
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
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }

            </>
        )

    }
}

export default ProfileStatus