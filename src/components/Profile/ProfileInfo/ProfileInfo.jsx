import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_023.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>Обо мне: {props.profile.aboutMe}</div>
                <div>О работе: {props.profile.lookingForAJobDescription}</div>
                <div>Контакты: {props.profile.contacts.facebook}</div>
            </div>
        </div>)
}

export default ProfileInfo;