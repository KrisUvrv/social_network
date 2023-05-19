import {Field, Formik} from "formik";
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

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <div>
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({
                      errors,
                      touched,
                      handleSubmit,
                  }) => (
                    <div className="login">
                        <div className="form">
                            <form noValidate onSubmit={handleSubmit}>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter email id / username"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                                <div>
                                    <Field
                                        type="checkbox"
                                        name="rememberMe"
                                    />remember me
                                </div>
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                                {captchaUrl && <img src={captchaUrl}/>}
                                {captchaUrl && <Field type="text"
                                                      name="captcha"
                                                      placeholder="Symbols from image"/>}
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    </div>
}
