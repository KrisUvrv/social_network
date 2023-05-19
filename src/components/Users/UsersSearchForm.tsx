import {Field, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users_reducer";
import {Button, Form, Input, Select} from "antd";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const initialValues = {
        term: '',
        friend: null
    };
    const submit = (values: typeof initialValues) => {

        const filter: FilterType = {
            term: values.term,
            friend: values.friend
        }

        props.onFilterChanged(filter);
    }

    const {Option} = Select;
    return <div>
        <Form
            initialValues={initialValues}
            validationSchema={usersSearchFormValidate}
            onFinish={submit}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
        >
                    <Form.Item type="text" name="term">
                        <Input placeholder="input search text" />
                    </Form.Item>

                    <Form.Item name="friend">
                        <Select placeholder="Select a option"
                                onChange={props.onFilterChanged}
                                allowClear>
                            <Option value="null">All</Option>
                            <Option value="true">Only followed</Option>
                            <Option value="false">Only unfollowed</Option>
                        </Select>
                    </Form.Item>

                    <Button htmlType="submit">
                        Find
                    </Button>
        </Form>
    </div>
})

export default UsersSearchForm;