import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux_store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
});

type MapPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    function RedirectComponent(props: WCP & MapPropsType) {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to={'/login'}/>;

        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}