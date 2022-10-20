import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Aylin'},
        {id: 3, name: 'Ksenia'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Ksyu'},
        {id: 6, name: 'Olga'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Salut'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ]

    let dialogElements = dialogsData
        .map( d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages
        .map( m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;