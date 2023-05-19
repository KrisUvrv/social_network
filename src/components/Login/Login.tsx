import {Form, Input, Checkbox, Button} from "antd";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Navigate} from 'react-router-dom'
import {AppStateType} from "../../redux/redux_store";
import React from "react";

const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
    // .min(8, "Password must be at least 8 characters"),
});

export const Login: React.FC = () => {
    const [form] = Form.useForm();
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const dispatch = useDispatch()

    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
        captcha: "",
    };

    const onSubmit = (formData: typeof initialValues) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }

    const onReset = () => {
        form.resetFields();
    };

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <div className="login">
            <div className="form">
                <Form
                    name="normal_login"
                    className="login-form"
                    validationSchema={schema}
                    initialValues={initialValues}
                    onFinish={onSubmit}
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                >
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: "Email is required"}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               placeholder="Enter email"
                               className="form-control inp_text"
                               id="email"/>
                    </Form.Item>

                    <Form.Item
                        type="password"
                        name="password"
                        rules={[{required: true, message: "Password is required"}]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                                        placeholder="Enter password" className="form-control"/>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>

                    </Form.Item>

                    {captchaUrl && <img src={captchaUrl}/>}
                    {captchaUrl && <Form.Item name="captcha"
                                              rules={[{required: true, message: "Symbols from image are required"}]}
                    >
                        <Input placeholder="Symbols from image"/>
                    </Form.Item>
                    }

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
}
