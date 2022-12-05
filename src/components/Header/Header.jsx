import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.inisol.com/wp-content/uploads/2019/10/nestle-logo-png-transparent-1024x355.png'></img>

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
            : <NavLink to={'login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;