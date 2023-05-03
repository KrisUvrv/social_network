<<<<<<< HEAD
import React from 'react';
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import {NewMessageFormValuesType} from "../../Dialogs";
import {createField, Textarea} from "../../../common/FormsControls/FormsControls";
=======
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {NewMessageFormValuesType} from "../../Dialogs";
import {LoginFormValuesType} from "../../../Login/Login";
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878

const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

<<<<<<< HEAD
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>
    = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>("Enter your message", 'newMessageBody', [required, maxLength50], Textarea)}
=======
const AddMessageForm:  React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)}
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

<<<<<<< HEAD
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
=======
export default reduxForm<NewMessageFormValuesType>({form: "dialogAddMessageForm"})(AddMessageForm);
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
