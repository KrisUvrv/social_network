import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-png-default-user-image-png-png.png";
import styles from "../../Users/users.module.css";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";
import {Avatar, Badge, Button, Descriptions, Input, message, Upload} from "antd";
import {UploadOutlined} from '@ant-design/icons';


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <Avatar size={164} icon={<img src={profile.photos.large || userPhoto} className={styles.userPhoto}/>}/>
                {isOwner &&
                    <Input onChange={onMainPhotoSelected}
                           type="file" bordered={false}
                           id="image_uploads"
                           name="image_uploads"
                           accept=".jpg, .jpeg, .png"
                          // style={{maxWidth: 600}}
                    />
                }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
            </div>
        </div>)
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        <Descriptions
            bordered
            column={{xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1}}
        >
            <Descriptions.Item label="Full name">{profile.fullName}</Descriptions.Item>
            <Descriptions.Item label="About me:">{profile.aboutMe}</Descriptions.Item>
            <Descriptions.Item label="looking for a job:">{profile.lookingForAJob ? "yes" : "no"}</Descriptions.Item>
            {profile.lookingForAJob &&
                <Descriptions.Item label="My skills">{profile.lookingForAJobDescription}</Descriptions.Item>
            }
            <Descriptions.Item label="Contacts:">
                {Object
                    .keys(profile.contacts)
                    .map(key => {
                        return <Contact key={key}
                                        contactTitle={key}
                                        contactValue={profile.contacts[key as keyof ContactsType]}/>
                    })}
            </Descriptions.Item>
        </Descriptions>

        {isOwner && <div>
            <Button onClick={goToEditMode}>edit</Button>
        </div>}

    </div>
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;