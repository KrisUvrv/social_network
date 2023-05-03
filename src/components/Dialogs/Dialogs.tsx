import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./Message/AddMessageForm/AddMessageForm";
import {InitialStateType} from "../../redux/dialogs_reducer";

type PropsType = {
<<<<<<< HEAD
    dialogsPage: InitialStateType
=======
    dialogs: InitialStateType
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogs;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;