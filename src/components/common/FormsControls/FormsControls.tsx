import React, {PropsWithChildren} from "react"
import styles from "./FormsControls.module.css"
import {FieldValidatorType} from "../../../utils/validators/validators"
import {Field, WrappedFieldProps} from "redux-form"

type FormControlPropsType = {
    meta: {
        touched: boolean
        error: string
    }
}
const FormControl: React.FC<PropsWithChildren<FormControlPropsType>> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}



export function createField<FormKeysType extends string>(placeholder: string | undefined,
                            name: FormKeysType,
                            validators: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                            props = {},
                            text = "",) {
    return <div>
        <Field
            placeholder={placeholder}
            validate={validators}
            name={name}
            component={component}
            {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>