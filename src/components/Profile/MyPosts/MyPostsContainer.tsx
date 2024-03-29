import React from "react";
import {actions} from "../../../redux/profile_reducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux_store";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profile.posts,
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;