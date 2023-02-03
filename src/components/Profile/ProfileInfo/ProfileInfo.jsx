import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_023.jpg"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div><h3>Обо мне: </h3>{props.profile.aboutMe}</div>
                <div><h3>Статус: </h3><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
            </div>
        </div>)
}

export default ProfileInfo;