import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
};


export function WithAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapStateToProps & MapDispatchToProps> = (props) => {
        {
            let {isAuth, ...restProps} = props
            if (!isAuth) return <Redirect to={"/login"}/>

            return <WrappedComponent {...restProps as WCP} />

        }
    }

    return connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
}

type  MapStateToProps = {
    isAuth: boolean
}
type  MapDispatchToProps = {
    isAuth: boolean
}