import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {NewMessageFormValuesType} from "../../Dialogs";
import {Button, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";

const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

export const AddMessageForm:  React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} onFinish={props.onSubmit}>
            <div>
                <Form.Item
                    name='newMessageBody'
                    // rules={[{required: true, maxLength50, message: "Email is required"}]}
                >
                    <TextArea
                           placeholder='Enter your message'
                           className="form-control inp_text"
                           />

                </Form.Item>
                <Button htmlType="submit">Send</Button>
            </div>
        </Form>
    )
}
