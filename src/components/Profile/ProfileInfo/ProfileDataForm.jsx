import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import styles from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save
            </button>
        </div>
        {error && <div className={styles.formSummaryError}>{error}</div>}

        <div>
            <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>About me</b>:
            { createField("About me", "aboutMe", [], Textarea  )}
        </div>
        <div>
            <b>looking for a job:</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My skills</b>: {createField("My skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: "edit_profile"})(ProfileDataForm);

export default ProfileDataFormReduxForm;