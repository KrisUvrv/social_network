import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Aylin</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Ksenia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Nastya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Ksyu</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Olga</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;