import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Aylin'},
        {id: 3, name: 'Ksenia'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Ksyu'},
        {id: 6, name: 'Olga'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Salut'},
        {id: 3, message: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
            </div>
        </div>
    )
}

export default Dialogs;