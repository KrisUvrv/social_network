import React, {useEffect} from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile_reducer";
import {connect} from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux_store";
import {ProfileType} from "../../types/types";

type MapPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
}

type PathParamsType = {
    userId: string
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

function ProfileContainer(props: MapPropsType & MapDispatchType & PathParamsType) {
    const refreshProfile = () => {
        let userId: number | null = props.router.params.userId;
        if (!userId) {
            userId = props.authorisedUserId;
            if (!userId) {
                props.history.push("/login");
            }
        }
        props.getUserProfile(userId as number);
        props.getStatus(userId as number);
    }

    useEffect(() => {
        refreshProfile();
    }, [props.router.params.userId]);

    return <Profile {...props}
                    isOwner={!props.router.params.userId}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    savePhoto={props.savePhoto}/>
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);