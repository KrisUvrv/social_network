import React from "react";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import styles from "../../common/FormsControls/FormsControls.module.css";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

<<<<<<< HEAD
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
=======
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType>= ({handleSubmit, profile, error}) => {
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save
            </button>
        </div>
        {error && <div className={styles.formSummaryError}>{error}</div>}

        <div>
            <b>Full name:</b> {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>About me</b>:
<<<<<<< HEAD
            { createField("About me", "aboutMe", [], Textarea  )}
=======
            { createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea  )}
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
        </div>
        <div>
            <b>looking for a job:</b> {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My skills</b>: {createField<ProfileTypeKeys>("My skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
<<<<<<< HEAD
=======
                    {/*todo: create some solution for embedded objects*/}
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: "edit_profile"})(ProfileDataForm);

export default ProfileDataFormReduxForm;