import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux_store";
import {logout} from "../../redux/auth_reducer";
import {Button} from "antd";

type PropsType = {
    style: IntrinsicAttributes
}
export const HeaderBlock: React.FC<PropsType> = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const login = useSelector((state: AppStateType) => state.auth.login)

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }

    return <header className={s.header}>

        <div className={s.loginBlock}>
            {isAuth ? <div className="login">{login} - <Button onClick={onLogout}>Logout</Button></div>
                : <NavLink to={'login'}>Login</NavLink>}
        </div>
    </header>
}