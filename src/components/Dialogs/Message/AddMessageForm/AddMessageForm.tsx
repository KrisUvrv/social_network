import React from 'react';
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import {NewMessageFormValuesType} from "../../Dialogs";
import {createField, Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>
    = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>("Enter your message", 'newMessageBody', [required, maxLength50], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);