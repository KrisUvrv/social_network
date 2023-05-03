import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}
<<<<<<< HEAD

=======
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
const DialogItem: React.FC<PropsType> = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;