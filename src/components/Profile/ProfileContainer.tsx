import React, {useEffect} from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile_reducer";
import {useSelector, useDispatch} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux_store";
import {ProfileType} from "../../types/types";


type PathParamsType = {
    userId: string;
};

function ProfileContainer() {
    const profile = useSelector((state: AppStateType) => state.profile.profile);
    const status = useSelector((state: AppStateType) => state.profile.status);
    const authorisedUserId = useSelector((state: AppStateType) => state.auth.id);
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams<PathParamsType>();
    const history = useNavigate();
    const router = ({location, navigate, params}) => {}

    const onUpdateStatus = (status: string) => {
        dispatch(updateStatus(status))
    }
    const onSavePhoto = (file: File) => {
        dispatch(savePhoto(file))
    }
    const onSaveProfile = (profile: ProfileType) => {
        dispatch(saveProfile(profile))
    }


    const refreshProfile = () => {
        let userId: number | null = params.userId;
        if (!userId) {
            userId = authorisedUserId;
            if (!userId) {
                navigate('/login')
                // history.push('/login');
            }
        }
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId));
    };

    useEffect(() => {
        refreshProfile();
    }, [params.userId]);

    return (
        <Profile
            isOwner={!params.userId}
            profile={profile}
            status={status}
            updateStatus={onUpdateStatus}
            savePhoto={onSavePhoto}
            saveProfile={onSaveProfile}
        />
    );
}

export default compose(
    withAuthRedirect)(ProfileContainer);