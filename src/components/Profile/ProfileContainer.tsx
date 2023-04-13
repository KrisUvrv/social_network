import React from "react";
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

    function withRouter(Component)
{
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

class ProfileContainer extends React.Component<MapPropsType & MapDispatchType, PathParamsType> {
    refreshProfile() {
        let userId: number | null = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId as number);
        this.props.getStatus(userId as number);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.router.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}/>
    }
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