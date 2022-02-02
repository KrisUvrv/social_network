import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_023.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>)
}

export default ProfileInfo;