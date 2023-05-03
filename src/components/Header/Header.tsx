import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

<<<<<<< HEAD
export type PropsType = {
    login: string
    logout: string
    isAuth: boolean

}

const Header: React.FC<PropsType> = (props) => {
=======
export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}
const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    return <header className={s.header}>
        <img src='https://www.inisol.com/wp-content/uploads/2019/10/nestle-logo-png-transparent-1024x355.png'></img>

        <div className={s.loginBlock}>
<<<<<<< HEAD
            { props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
            : <NavLink to={'login'}>Login</NavLink>}
=======
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'login'}>Login</NavLink>}
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
        </div>
    </header>
}

export default Header;