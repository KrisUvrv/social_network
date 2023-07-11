import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from '../../../common/FormsControls/FormsControls';
import {required} from '../../../../utils/validators/validators';
import {Button, Form} from "antd";
import {NewMessageFormValuesType} from "../../../Dialogs/Dialogs";
import TextArea from "antd/es/input/TextArea";

type PropsType = {}

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

// const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 {createField<AddPostFormValuesTypeKeys>('Your post', 'newPostText', [required], Input)}
//             </div>
//             <div>
//                 <button>Add post</button>
//             </div>
//         </form>
//     )
// }

export const AddPostForm:   React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    const [form] = Form.useForm();
    const submit = (values) => {
        props.onSubmit(values)
        form.resetFields()
    }
    return (
        <Form form={form} onFinish={submit} >
            <div>
                <Form.Item
                    name='newPostText'
                    // rules={[{required: true, maxLength50, message: "Email is required"}]}
                >
                    <TextArea
                        placeholder='Your post'
                        className="form-control inp_text"
                    />

                </Form.Item>
                <Button htmlType="submit">Add post</Button>
            </div>
        </Form>
    )
}