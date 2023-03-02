import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <div><h3>Обо мне: </h3>{profile.aboutMe}</div>
                <div><h3>Статус: </h3><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
            </div>
        </div>)
}

export default ProfileInfo;