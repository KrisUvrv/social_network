<<<<<<< HEAD
import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from '../redux/redux_store';

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapPropsType);
=======
import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux_store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
});
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878

type MapPropsType = {
    isAuth: boolean
}
<<<<<<< HEAD
type DispatchPropsType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to='/login'/>
=======

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    function RedirectComponent(props: WCP & MapPropsType) {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to={'/login'}/>;
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878

        return <WrappedComponent {...restProps as WCP}/>
    }

<<<<<<< HEAD
    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
        mapStateToPropsForRedirect, {})
    (RedirectComponent)
=======
    let ConnectedAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878

    return ConnectedAuthRedirectComponent;
}