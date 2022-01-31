import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_023.jpg"
                 alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;