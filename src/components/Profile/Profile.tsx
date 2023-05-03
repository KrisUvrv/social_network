import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";

type PropsType = {
<<<<<<< HEAD
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
=======
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {

    return <div>
        <ProfileInfo isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;